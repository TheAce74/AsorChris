export const getInitials = (value: string) => {
  const arr = value.split(" ");
  return arr[0][0] + arr[1][0];
};
