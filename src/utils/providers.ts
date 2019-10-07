import { injectable } from "inversify";
import "reflect-metadata";

export interface NameProvider {
  provide(): string;
}

@injectable()
export class NameProviderImpl implements NameProvider {
  provide() {
    return "World";
  }
}