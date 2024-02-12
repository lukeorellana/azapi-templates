import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersDatastoresProps extends IAzAPIBaseProps {

}

/**
 * HybriddataDatamanagersDatastores resource
 */
export class HybriddataDatamanagersDatastores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybriddataDatamanagersDatastoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridData/dataManagers/dataStores@2019-06-01";
  }

  protected getResourceBody(props: HybriddataDatamanagersDatastoresProps): string {
    return JSON.stringify(
        {properties: {customerSecrets: [{algorithm: "string", keyIdentifier: "string", keyValue: "string"}], dataStoreTypeId: "string", repositoryId: "string", state: "string"}}
    );
  }
}
