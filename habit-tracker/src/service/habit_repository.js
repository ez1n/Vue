import {database} from "@/service/firebase";
import { ref, set, remove, update, onValue } from "firebase/database";

class HabitRepository {
  /* get habits */
  static getHabits(setHabit) {
    onValue(ref(database,`habits`), (habits) => {
      if (habits.exists()) {
        setHabit(Object.values(habits.val()))
      } else {
        setHabit([])
      }
    })
  }

  /* habit 추가 */
  static addHabit(habit) {
    return set(ref(database, `habits/${habit.id}`), habit)
  }
  /* habit 삭제 */
  static deleteHabit(id) {
    const habitRef = ref(database, `habits/${id}`);
    return remove(habitRef);
  }

  /* habit 증가, 감소 */
  static countHabit(id, habit) {
    const habitRef = ref(database, `habits/${id}`);
    return update(habitRef, habit);
  }
}

export default HabitRepository;