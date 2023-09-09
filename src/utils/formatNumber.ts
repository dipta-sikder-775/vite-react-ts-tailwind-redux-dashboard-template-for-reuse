interface IFormatNumberProps {
  num: number | string;
  local?: string;
  currency?: string;
}

const formatNumber = ({
  currency = "USD",
  local = "en-Us",
  num = 0,
}: IFormatNumberProps): string => {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency,
  }).format(+num);
};

export default formatNumber;
