require('dotenv').config({ override: true });

console.log('teste aaas');

export interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private userData: UserProps) {}

  //ajustar depois -> usar o extends ...
  get<UserPropsProps extends keyof UserProps>(propName: UserPropsProps): number | string | undefined {
    return this.userData[propName];
  }

  set(userPropsToUpdate: UserProps): void {
    Object.assign(this.userData, userPropsToUpdate);
  }
}

const usuario = new User({ name: 'nome usuario', age: 15 });
console.log(usuario);
console.log(usuario.get('name'));
