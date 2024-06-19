type User = {
   name: string,
   email: string,
   password: string
};

type Subject = {
   name: string,
   date: number,
   paid: boolean,
   canceled: boolean
};

export interface SubjectListStore {
   subjectList: {
      value: Subject[]
   }
};

export interface UserStore {
   user: {
      value: null | User;
   }
};