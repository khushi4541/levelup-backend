import "dotenv/config";
import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getHabits = async (req, res) => {
  try {
    const habits = await knex("habits").where({ user_id: req.token.id });

    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch habits" });
  }
};

const completeHabits = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const habit = await knex("habits").where({ id }).first();

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    const completionHistory = habit.completion_history || [];

    const today = new Date().toISOString().split("T")[0];
    const isAlreadyCompletedToday = completionHistory.includes(today);

    let updatedHistory = [...completionHistory];
    let updatedStreakCount = habit.streak_count;

    if (completed) {
      if (!isAlreadyCompletedToday) {
        updatedHistory.push(today);
        updatedStreakCount += 1;
      }
    } else {
      if (isAlreadyCompletedToday) {
        updatedHistory = updatedHistory.filter((date) => date !== today);
        updatedStreakCount = Math.max(updatedStreakCount - 1, 0);
      }
    }

    await knex("habits")
      .where({ id })
      .update({
        completed,
        streak_count: updatedStreakCount,
        completion_history: JSON.stringify(updatedHistory),
        updated_at: knex.fn.now(),
      });

    res.status(200).json({
      message: "Habit completion status and streak updated",
      habit: {
        id: habit.id,
        completed,
        streak_count: updatedStreakCount,
        completion_history: updatedHistory,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update habit" });
  }
};

export { getHabits, completeHabits };
