import { assert } from "chai";
import isMobile from "../../utils/MobileDetector";

describe("Is mobile tester code", () => {
    it("should return true if the width of the screen is less than 768", () => {
        //Arrange
        //Act
        //Assert

        assert.isTrue(isMobile(767, 767));
        
    });

    it("should return false if the width is 768", () => {
        //Arrange
        //Act
        //Assert
        assert.isFalse(isMobile(768, 768));
    });

    it("should return false if the width larger than 768", () => {
        //Arrange
        //Act
        //Assert
        assert.isFalse(isMobile(1024, 1024));
    });

    it("should return true if the inner width is < 768", () => {
        //Arrange
        //Act
        //Assert
        assert.isTrue(isMobile(700, 768));
    });

})
