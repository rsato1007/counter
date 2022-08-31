import { Counter } from "../src/Counter";
describe("all tests for Counter.createElement", () => {
    it("generate simple counter element", () => {
        // Arrange
        const counterElement = {
            type: 'div',
            elementProps: {}
        }
    
        // Act
        const result = Counter.createElement("div", null);
    
        // Assert
        expect(result).toStrictEqual(counterElement);
    });

    it("should create slightly complex counter element", () => {
        // Arrange
        const counterElement = {
            type: 'h1',
            elementProps: {
                name: "John Smith"
            }
        }

        // Act
        const result = Counter.createElement('h1', {name: "John Smith"});

        // Assert
        expect(result).toStrictEqual(counterElement);
    });

    it("should test for children elements", () => {
        // Arrange
        const counterElement = {
            type: 'div',
            elementProps: {
                children: [
                    Counter.createElement("h1", null)
                ]
            }
        }

        // Act
        const result = Counter.createElement('div', null, Counter.createElement("h1", null));

        // Arrange
        expect(result).toStrictEqual(counterElement);
    });
});