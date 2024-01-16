import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '../../../src/hooks/useLocalStorage';

describe('useLocalStorage Hook', () => {

    it('should use fallback state when no value in localStorage', () => {
        const { result } = renderHook(() => useLocalStorage('testKey', false));
        expect(result.current[0]).toBe(false);
    });

    it('should retrieve existing value from localStorage', () => {
        localStorage.setItem('testKey', JSON.stringify(true));
        const { result } = renderHook(() => useLocalStorage('testKey', false));
        expect(result.current[0]).toBe(true);
    });

    it('should update localStorage when value changes', () => {
        const { result } = renderHook(() => useLocalStorage('testKey', false));
        const newValue = true;

        act(() => {
            result.current[1](newValue);
        });

        expect(result.current[0]).toBe(newValue);
        expect(localStorage.getItem('testKey')).toBe(JSON.stringify(newValue));
    });
});