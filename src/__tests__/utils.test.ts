import { convertToBaseN } from "../utils";
describe("convert to base 3", () => {
  it("should return correct base 3", () => {
    expect(convertToBaseN(0, 3)).toBe("000");
    expect(convertToBaseN(1, 3)).toBe("001");
    expect(convertToBaseN(2, 3)).toBe("002");
    expect(convertToBaseN(3, 3)).toBe("010");
    expect(convertToBaseN(4, 3)).toBe("011");
    expect(convertToBaseN(5, 3)).toBe("012");
    expect(convertToBaseN(6, 3)).toBe("020");
    expect(convertToBaseN(7, 3)).toBe("021");
    expect(convertToBaseN(8, 3)).toBe("022");
  });

  it("should return correct base 4", () => {
    expect(convertToBaseN(0, 4)).toBe("000");
    expect(convertToBaseN(1, 4)).toBe("001");
    expect(convertToBaseN(2, 4)).toBe("002");
    expect(convertToBaseN(3, 4)).toBe("003");
    expect(convertToBaseN(4, 4)).toBe("010");
    expect(convertToBaseN(5, 4)).toBe("011");
    expect(convertToBaseN(6, 4)).toBe("012");
    expect(convertToBaseN(7, 4)).toBe("013");
    expect(convertToBaseN(8, 4)).toBe("020");
    expect(convertToBaseN(9, 4)).toBe("021");
    expect(convertToBaseN(10, 4)).toBe("022");
    expect(convertToBaseN(11, 4)).toBe("023");
    expect(convertToBaseN(12, 4)).toBe("030");
    expect(convertToBaseN(13, 4)).toBe("031");
    expect(convertToBaseN(14, 4)).toBe("032");
    expect(convertToBaseN(15, 4)).toBe("033");
    expect(convertToBaseN(16, 4)).toBe("100");
  });

  it("should return correct base 11", () => {
    expect(convertToBaseN(0, 11)).toBe("000000");
    expect(convertToBaseN(1, 11)).toBe("000001");
    expect(convertToBaseN(2, 11)).toBe("000002");
    expect(convertToBaseN(3, 11)).toBe("000003");
    expect(convertToBaseN(4, 11)).toBe("000004");
    expect(convertToBaseN(5, 11)).toBe("000005");
    expect(convertToBaseN(6, 11)).toBe("000006");
    expect(convertToBaseN(7, 11)).toBe("000007");
    expect(convertToBaseN(8, 11)).toBe("000008");
    expect(convertToBaseN(9, 11)).toBe("000009");
    expect(convertToBaseN(10, 11)).toBe("00000a");
    expect(convertToBaseN(11, 11)).toBe("000010");
  });
});
