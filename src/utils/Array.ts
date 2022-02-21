import _ from "lodash";

export namespace Util {
  export namespace Array {
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
