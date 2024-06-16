import { expect } from "vitest";
import isMobile from "../../utils/MobileDetector";

describe("Is mobile tester code", () => {
    it("should return true if the width of the screen is less than 768", () => {
        //Arrange
        //Act
        //Assert

        expect(isMobile(767, 767)).toBe(true);
        
    });

    it("should return false if the width is 768", () => {
        //Arrange
        //Act
        //Assert
        expect(isMobile(768, 768)).toBe(false);
    });

    it("should return false if the width larger than 768", () => {
        //Arrange
        //Act
        //Assert
        expect(isMobile(1024, 1024)).toBe(false);
    });

    it("should return true if the inner width is < 768", () => {
        //Arrange
        //Act
        //Assert
        expect(isMobile(700, 768)).toBe(true);
    });

})
