import underTest from './under-test'

describe('Under test', () => {
    it('check coverage lines', () => {
        expect(underTest(true)).toEqual(2)
    })
})