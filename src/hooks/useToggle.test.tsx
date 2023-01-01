import React from 'react';
import {renderHook, act} from '@testing-library/react'
import useToggle from './useToggle'

describe('useToggle', () => {
    test("render the correct initial value", () => {
        const {result} = renderHook(useToggle)
        expect(result.current[0]).toBe(false)

        const {result: result2} = renderHook(useToggle, {initialProps: true})
        expect(result2.current[0]).toBe(true)
    })

    test("toggle the value", () => {
        const {result} = renderHook(useToggle)
        expect(result.current[0]).toBe(false)
        act(() => {
            result.current[1]()
        })
        expect(result.current[0]).toBe(true)
        act(() => {
            result.current[1]()
        })
        expect(result.current[0]).toBe(false)
    })
})