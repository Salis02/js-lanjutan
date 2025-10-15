const {
    angka,
    mapAngka,
    newAngkaFilter,
    newAngkaMap,
    jumlahSemuaAngka,
    hasilChaining,
} = require('./arrowFunctionUnitTest');

describe('Tes fungsi-fungsi array prototype', () => {
    test('mapAngka(1) harus mengembalikan angka <=1', () => {
        expect(mapAngka(1)).toEqual([-1, 0, -3, -4, 1, -2, -5]);
    });
    test('newAngkaFilter() harus sama dengan hasil filter manual', () => {
        expect(newAngkaFilter()).toEqual([-1, 0, -3, -4, 1, -2, -5]);
    });

    test('newAngkaMap() harus mengurangi setiap angka dengan 10', () => {
        const expected = angka.map((a) => a - 10);
        expect(newAngkaMap()).toEqual(expected);
    });

    test('jumlahSemuaAngka() harus menghasilkan total 0', () => {
        expect(jumlahSemuaAngka()).toBe(0);
    });

    test('hasilChaining() harus menghasilkan 70', () => {
        expect(hasilChaining()).toBe(70);
    });
})