const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
describe("Change first string letter to cap letter'", () => {

    test('Success', () => {
        expect(capitalize("abcdef")).toBe("Abcdef");
    });
    test('Faillure', () => {
        expect(capitalize("abcdef")).toBe("Abcdef");
    });
});
