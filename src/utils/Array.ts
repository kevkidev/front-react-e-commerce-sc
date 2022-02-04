import { DynamicProperty } from "types/types.d";

export namespace Util {
  export namespace Array {
    export function sortAsc<T extends DynamicProperty>(
      list: T[],
      propertyName: string
    ): T[] {
      if (list && list.length === 0) return [];

      const sortedList = [...list];
      sortedList.sort((a, b) => {
        const value1 = a[propertyName].toUpperCase();
        const value2 = b[propertyName].toUpperCase();
        return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      });
      return sortedList;
    }
  }
}
