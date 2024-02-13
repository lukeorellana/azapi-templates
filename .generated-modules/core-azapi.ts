// import { Construct } from "constructs";
// import { Resource } from "../../.gen/providers/azapi/resource";

// /**
//  * Specifies the identity configuration for an Azure API resource.
//  */
// export interface AzAPIIdentity {
//   /**
//    * Specifies the type of identity used for the resource, such as 'SystemAssigned', 'UserAssigned', or 'None'.
//    */
//   readonly type: string;

//   /**
//    * A list of user-assigned identity IDs, required if the type is 'UserAssigned'.
//    */
//   readonly identityIds: string[];
// }

// /**
//  * Defines the properties required to create or configure an Azure API resource group.
//  */
// export interface IAzAPIBaseProps {
//   /**
//    * The name of the resource group. Must be unique within Azure.
//    */
//   readonly name: string;

//   /**
//    * The Azure region where the resource group will be deployed, e.g., 'East US', 'West Europe'.
//    */
//   readonly location: string;

//   /**
//    * Optional. A collection of tags applied to the resource group for organizational purposes.
//    */
//   readonly tags?: { [key: string]: string };

//   /**
//    * Optional. Additional properties for the resource group.
//    */
//   readonly properties?: { [key: string]: string };

//   /**
//    * Optional. The ID of the resource that manages this resource group.
//    */
//   readonly managedBy?: string;

//   /**
//    * Optional. The parent resource ID, if the resource group is nested within another resource.
//    */
//   readonly parentid?: string;

//   /**
//    * Optional. Specifies fields to ignore during updates, preventing unnecessary redeployments.
//    */
//   readonly ignoreBodyChanges?: string[];

//   /**
//    * Optional. If true, missing properties in the response will be ignored.
//    */
//   readonly ignoreMissingProperty?: boolean;

//   /**
//    * Optional. If true, property name casing differences will be ignored.
//    */
//   readonly ignoreCasing?: boolean;

//   /**
//    * Optional. Names of any locks associated with the resource group.
//    */
//   readonly locks?: string[];

//   /**
//    * Optional. Whether schema validation is enabled for the resource group.
//    */
//   readonly schemaValidationEnabled?: boolean;

//   /**
//    * Optional. The identity configuration for the resource group.
//    */
//   readonly identity?: AzAPIIdentity;
// }

// /**
//  * Represents an Azure API resource as a construct that can be deployed and managed.
//  */
// export class AzAPIBase extends Construct {
//   public id: string;

//   constructor(scope: Construct, id: string, props: IAzAPIBaseProps) {
//     super(scope, id);

//     // Default values for type and body, can be overridden by subclasses
//     const resourceType = this.getResourceType();
//     const resourceBody = this.getResourceBody(props);

//     const rg = new Resource(this, "azapiresource", {
//       type: resourceType,
//       name: props.name,
//       location: props.location,
//       parentId: props.parentid,
//       identity: props.identity,
//       ignoreBodyChanges: props.ignoreBodyChanges,
//       ignoreMissingProperty: props.ignoreMissingProperty,
//       ignoreCasing: props.ignoreCasing,
//       schemaValidationEnabled: props.schemaValidationEnabled,
//       locks: props.locks,
//       tags: props.tags,
//       body: resourceBody,
//     });

//     this.id = rg.id;
//   }

//   // Method to get the resource type, intended to be overridden by subclasses
//   protected getResourceType(): string {
//     throw new Error("getResourceType must be implemented by subclasses.");
//   }

//   // Method to get the resource body, intended to be overridden by subclasses
//   protected getResourceBody(props: IAzAPIBaseProps): string {
//     throw new Error(
//       `getResourceBody must be implemented by subclasses: ${props}`,
//     );
//   }
// }
