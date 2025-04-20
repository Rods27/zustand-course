export interface IPersonSlice {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}
