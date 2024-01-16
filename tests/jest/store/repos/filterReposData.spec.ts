import { filterReposData } from '../../../../src/store/repos';
import { IGithubReposResponse } from '../../../../src/store/repos/types';
import { repoCardListMockData, repoCardListRawMockData } from '../../../mocks/repoCardMockData';

describe('filterReposData', () => {
    it('should return an empty array if data is null', () => {
        const data: IGithubReposResponse['data'] = {};
        const result = filterReposData(data);
        expect(result).toEqual([]);
    });

    it('should return an empty array if data is an empty array', () => {
        const data: IGithubReposResponse['data'] = [];
        const result = filterReposData(data);
        expect(result).toEqual([]);
    });

  it('should map and filter data correctly', () => {
    const result = filterReposData(repoCardListRawMockData);
    expect(result).toEqual(repoCardListMockData);
    });
});