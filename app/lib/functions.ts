export const rupiahDisplay = (price: number | undefined) => {
  return price?.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
};
