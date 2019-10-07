import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { NameProvider, NameProviderImpl } from "src/utils/providers";

// import { NameProvider, NameProviderImpl } from "./providers";

export const container = new Container();
container.bind<NameProvider>("testName").to(NameProviderImpl).inSingletonScope();

export const lazyInject = getDecorators(container).lazyInject;