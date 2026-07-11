class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let response: number[] = [];
        let map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let rest = target - nums[i];
      if (map.has(rest)) {
        response.push(map.get(rest) as number);
        response.push(i);
        break;
      }
      map.set(nums[i], i); // se guarda DESPUÉS de comprobar
        }
        return response;
    }
}
