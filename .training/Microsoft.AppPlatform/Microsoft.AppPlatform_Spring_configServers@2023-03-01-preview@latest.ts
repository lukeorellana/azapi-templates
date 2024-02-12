import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringConfigserversProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringConfigservers resource
 */
export class AppplatformSpringConfigservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringConfigserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringConfigserversProps): string {
    return JSON.stringify(
        {properties: {configServer: {gitProperty: {hostKey: "string", hostKeyAlgorithm: "string", label: "string", password: "string", privateKey: "string", repositories: [{hostKey: "string", hostKeyAlgorithm: "string", label: "string", name: "string", password: "string", pattern: ["string"], privateKey: "string", searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}], searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}}, error: {code: "string", message: "string"}}}
    );
  }
}
