import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationEmailservicesProps extends IAzAPIBaseProps {

}

/**
 * CommunicationEmailservices resource
 */
export class CommunicationEmailservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CommunicationEmailservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Communication/emailServices@2023-04-01-preview";
  }

  protected getResourceBody(props: CommunicationEmailservicesProps): string {
    return JSON.stringify(
        {properties: {dataLocation: "string"}}
    );
  }
}
