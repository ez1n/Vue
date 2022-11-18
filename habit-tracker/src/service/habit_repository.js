import {database} from "@/service/firebase";
import { ref, set, remove, update, onValue } from "firebase/database";

class HabitRepository {
  static getHabits(setHabit) {
    onValue(ref(database,`habits`), (habits) => {
      if (habits.exists()) {
        setHabit(Object.values(habits.val()))
      } else {
        setHabit([])
      }
    })
  }

  static addHabit(habit) {
    return set(ref(database, `habits/${habit.id}`), habit)
  }

  static deleteHabit(id) {
    const habitRef = ref(database, `habits/${id}`);
    return remove(habitRef);
  }

  static countHabit(id, habit) {
    const habitRef = ref(database, `habits/${id}`);
    return update(habitRef, habit);
  }
}

export default HabitRepository;