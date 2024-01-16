import { filterUsersData } from '../../../../src/store/users';
import { IGithubUsersResponse } from '../../../../src/store/users/types';
import { usersMockData, usersRawMockData } from '../../../mocks/usersMockData';

describe('filterUsersData', () => {
    it('should return an empty array if data is null', () => {
        const data: IGithubUsersResponse['data'] = {};
        const result = filterUsersData(data);
        expect(result).toEqual([]);
    });

    it('should return an empty array if data is an empty array', () => {
        const data: IGithubUsersResponse['data'] = {items: []};
        const result = filterUsersData(data);
        expect(result).toEqual([]);
    });

  it('should map and filter data correctly', () => {
    const result = filterUsersData({ items: usersRawMockData });
    expect(result).toEqual(usersMockData);
    });
});