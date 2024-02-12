import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CommunicationCommunicationservicesProps extends IAzAPIBaseProps {

}

/**
 * CommunicationCommunicationservices resource
 */
export class CommunicationCommunicationservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CommunicationCommunicationservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Communication/communicationServices@2023-04-01-preview";
  }

  protected getResourceBody(props: CommunicationCommunicationservicesProps): string {
    return JSON.stringify(
        {properties: {dataLocation: "string", linkedDomains: ["string"]}}
    );
  }
}
