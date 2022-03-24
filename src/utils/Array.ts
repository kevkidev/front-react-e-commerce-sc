import _ from "lodash";
import { DynamicProperty } from "types/types.d";

export namespace Util {
  export namespace Array {
    export function sortAsc<T extends DynamicProperty>(
      list: T[],
      propertyName: string
    ): T[] {
      const sortedList = [...list];
      sortedList.sort((a, b) => {
        const value1 = a[propertyName].toUpperCase();
        const value2 = b[propertyName].toUpperCase();
        return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      });
      return sortedList;
    }

    /**
     * Sort a list by the name property of elements
     * @param list
     * @param criteria
     * @returns a new sorted list
     */
    export function sortByNameAsc<T extends { name: string }>(list: T[]): T[] {
      const sorted = _.cloneDeep(list);
      return sorted.sort((a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
}
