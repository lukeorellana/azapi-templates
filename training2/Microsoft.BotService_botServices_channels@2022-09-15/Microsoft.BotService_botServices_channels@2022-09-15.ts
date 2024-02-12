import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesChannelsProps extends IAzAPIBaseProps {
/**
   * Gets or sets the SKU of the resource.
   */
readonly sku?: Sku;

/**
   * Required. Gets or sets the Kind of the resource.
   */
readonly kind?: 'azurebot''bot''designer''function''sdk';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:botServices;

/**
   * Entity Tag
   */
readonly etag?: string;

/**
   * Entity Tag of the resource
   */
readonly etag?: string;

/**
   * Set the object type
   */
readonly channelName: AcsChatChannelAlexaChannelDirectLineChannelDirectLineSpeechChannelEmailChannelFacebookChannelKikChannelLineChannelM365ExtensionsMsTeamsChannelOmnichannelOutlookChannelSearchAssistantSkypeChannelSlackChannelSmsChannelTelegramChannelTelephonyChannelWebChatChannel;

/**
   * The channel name
   */
readonly channelName: 'AcsChatChannel';

/**
   * The channel name
   */
readonly channelName: 'AlexaChannel';

/**
   * The Alexa skill Id
   */
readonly alexaSkillId: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The channel name
   */
readonly channelName: 'DirectLineChannel';

/**
   * Direct Line embed code of the resource
   */
readonly DirectLineEmbedCode?: string;

/**
   * The extensionKey1
   */
readonly extensionKey1?: string;

/**
   * The extensionKey2
   */
readonly extensionKey2?: string;

/**
   * The list of Direct Line sites
   */
readonly sites?: DirectLineSite[];

/**
   * DirectLine application id
   */
readonly appId?: string;

/**
   * Entity Tag
   */
readonly eTag?: string;

/**
   * Whether this site is enabled for block user upload.
   */
readonly isBlockUserUploadEnabled?: bool;

/**
   * Whether this site is disabled detailed logging for
   */
readonly isDetailedLoggingEnabled?: bool;

/**
   * Whether this site is enabled for DirectLine channel
   */
readonly isEnabled: bool;

/**
   * Whether this site is EndpointParameters enabled for channel
   */
readonly isEndpointParametersEnabled?: bool;

/**
   * Whether this no-storage site is disabled detailed logging for
   */
readonly isNoStorageEnabled?: bool;

/**
   * Whether this site is enabled for authentication with Bot Framework.
   */
readonly isSecureSiteEnabled?: bool;

/**
   * Whether this site is enabled for Bot Framework V1 protocol.
   */
readonly isV1Enabled?: bool;

/**
   * Whether this site is enabled for Bot Framework V3 protocol.
   */
readonly isV3Enabled?: bool;

/**
   * Whether this site is enabled for preview versions of Webchat
   */
readonly isWebchatPreviewEnabled?: bool;

/**
   * Whether this site is enabled for Webchat Speech
   */
readonly isWebChatSpeechEnabled?: bool;

/**
   * Site name
   */
readonly siteName: string;

/**
   * Tenant Id
   */
readonly tenantId?: string;

/**
   * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
   */
readonly trustedOrigins?: string[];

/**
   * The channel name
   */
readonly channelName: 'DirectLineSpeechChannel';

/**
   * The cognitive service region with this channel registration.
   */
readonly cognitiveServiceRegion?: string;

/**
   * The cognitive service id with this channel registration.
   */
readonly cognitiveServiceResourceId?: string;

/**
   * The cognitive service subscription key to use with this channel registration.
   */
readonly cognitiveServiceSubscriptionKey?: string;

/**
   * Custom voice deployment id (optional).
   */
readonly customSpeechModelId?: string;

/**
   * Custom speech model id (optional).
   */
readonly customVoiceDeploymentId?: string;

/**
   * Make this a default bot for chosen cognitive service account.
   */
readonly isDefaultBotForCogSvcAccount?: bool;

/**
   * Whether this channel is enabled or not.
   */
readonly isEnabled?: bool;

/**
   * The channel name
   */
readonly channelName: 'EmailChannel';

/**
   * Email channel auth method. 0 Password (Default); 1 Graph.
   */
readonly authMethod?: number;

/**
   * The email address
   */
readonly emailAddress: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The magic code for setting up the modern authentication.
   */
readonly magicCode?: string;

/**
   * The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly password?: string;

/**
   * The channel name
   */
readonly channelName: 'FacebookChannel';

/**
   * Facebook application id
   */
readonly appId: string;

/**
   * Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly appSecret?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The list of Facebook pages
   */
readonly pages?: FacebookPage[];

/**
   * Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly accessToken?: string;

/**
   * Page id
   */
readonly id: string;

/**
   * The channel name
   */
readonly channelName: 'KikChannel';

/**
   * Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly apiKey?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * Whether this channel is validated for the bot
   */
readonly isValidated?: bool;

/**
   * The Kik user name
   */
readonly userName: string;

/**
   * The channel name
   */
readonly channelName: 'LineChannel';

/**
   * The list of line channel registrations
   */
readonly lineRegistrations: LineRegistration[];

/**
   * Access token for the line channel registration
   */
readonly channelAccessToken?: string;

/**
   * Secret for the line channel registration
   */
readonly channelSecret?: string;

/**
   * The channel name
   */
readonly channelName: 'M365Extensions';

/**
   * The channel name
   */
readonly channelName: 'MsTeamsChannel';

/**
   * Whether this channel accepted terms
   */
readonly acceptedTerms?: bool;

/**
   * Webhook for Microsoft Teams channel calls
   */
readonly callingWebhook?: string;

/**
   * Deployment environment for Microsoft Teams channel calls
   */
readonly deploymentEnvironment?: string;

/**
   * Enable calling for Microsoft Teams channel
   */
readonly enableCalling?: bool;

/**
   * Webhook for Microsoft Teams channel calls
   */
readonly incomingCallRoute?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The channel name
   */
readonly channelName: 'Omnichannel';

/**
   * The channel name
   */
readonly channelName: 'OutlookChannel';

/**
   * The channel name
   */
readonly channelName: 'SearchAssistant';

/**
   * The channel name
   */
readonly channelName: 'SkypeChannel';

/**
   * Calling web hook for Skype channel
   */
readonly callingWebHook?: string;

/**
   * Enable calling for Skype channel
   */
readonly enableCalling?: bool;

/**
   * Enable groups for Skype channel
   */
readonly enableGroups?: bool;

/**
   * Enable media cards for Skype channel
   */
readonly enableMediaCards?: bool;

/**
   * Enable messaging for Skype channel
   */
readonly enableMessaging?: bool;

/**
   * Enable screen sharing for Skype channel
   */
readonly enableScreenSharing?: bool;

/**
   * Enable video for Skype channel
   */
readonly enableVideo?: bool;

/**
   * Group mode for Skype channel
   */
readonly groupsMode?: string;

/**
   * Incoming call route for Skype channel
   */
readonly incomingCallRoute?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The channel name
   */
readonly channelName: 'SlackChannel';

/**
   * The Slack client id
   */
readonly clientId?: string;

/**
   * The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly clientSecret?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * The Slack landing page Url
   */
readonly landingPageUrl?: string;

/**
   * Whether to register the settings before OAuth validation is performed. Recommended to True.
   */
readonly registerBeforeOAuthFlow?: bool;

/**
   * The Slack permission scopes.
   */
readonly scopes?: string;

/**
   * The Slack signing secret.
   */
readonly signingSecret?: string;

/**
   * The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly verificationToken?: string;

/**
   * The channel name
   */
readonly channelName: 'SmsChannel';

/**
   * The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly accountSID: string;

/**
   * The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly authToken?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * Whether this channel is validated for the bot
   */
readonly isValidated?: bool;

/**
   * The Sms phone
   */
readonly phone: string;

/**
   * The channel name
   */
readonly channelName: 'TelegramChannel';

/**
   * The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
   */
readonly accessToken?: string;

/**
   * Whether this channel is enabled for the bot
   */
readonly isEnabled: bool;

/**
   * Whether this channel is validated for the bot
   */
readonly isValidated?: bool;

/**
   * The channel name
   */
readonly channelName: 'TelephonyChannel';

/**
   * The list of Telephony api configuration
   */
readonly apiConfigurations?: TelephonyChannelResourceApiConfiguration[];

/**
   * The extensionKey2
   */
readonly cognitiveServiceRegion?: string;

/**
   * The extensionKey1
   */
readonly cognitiveServiceSubscriptionKey?: string;

/**
   * The default locale of the channel
   */
readonly defaultLocale?: string;

/**
   * Whether the channel is enabled
   */
readonly isEnabled?: bool;

/**
   * The list of Telephony phone numbers
   */
readonly phoneNumbers?: TelephonyPhoneNumbers[];

/**
   * The premium SKU applied to the channel
   */
readonly premiumSKU?: string;

/**
   * The cognitive service region.
   */
readonly cognitiveServiceRegion?: string;

/**
   * The cognitive service resourceId.
   */
readonly cognitiveServiceResourceId?: string;

/**
   * The cognitive service subscription key.
   */
readonly cognitiveServiceSubscriptionKey?: string;

/**
   * The default locale.
   */
readonly defaultLocale?: string;

/**
   * The id of config.
   */
readonly id?: string;

/**
   * The provider name.
   */
readonly providerName?: string;

/**
   * The endpoint of ACS.
   */
readonly acsEndpoint?: string;

/**
   * The resource id of ACS.
   */
readonly acsResourceId?: string;

/**
   * The secret of ACS.
   */
readonly acsSecret?: string;

/**
   * The service region of cognitive service.
   */
readonly cognitiveServiceRegion?: string;

/**
   * The resource id of cognitive service.
   */
readonly cognitiveServiceResourceId?: string;

/**
   * The subscription key of cognitive service.
   */
readonly cognitiveServiceSubscriptionKey?: string;

/**
   * The default locale of the phone number.
   */
readonly defaultLocale?: string;

/**
   * The element id.
   */
readonly id?: string;

/**
   * Optional Property that will determine the offering type of the phone.
   */
readonly offerType?: string;

/**
   * The phone number.
   */
readonly phoneNumber?: string;

/**
   * The channel name
   */
readonly channelName: 'WebChatChannel';

/**
   * The list of Web Chat sites
   */
readonly sites?: WebChatSite[];

/**
   * DirectLine application id
   */
readonly appId?: string;

/**
   * Entity Tag
   */
readonly eTag?: string;

/**
   * Whether this site is enabled for block user upload.
   */
readonly isBlockUserUploadEnabled?: bool;

/**
   * Whether this site is disabled detailed logging for
   */
readonly isDetailedLoggingEnabled?: bool;

/**
   * Whether this site is enabled for DirectLine channel
   */
readonly isEnabled: bool;

/**
   * Whether this site is EndpointParameters enabled for channel
   */
readonly isEndpointParametersEnabled?: bool;

/**
   * Whether this no-storage site is disabled detailed logging for
   */
readonly isNoStorageEnabled?: bool;

/**
   * Whether this site is enabled for authentication with Bot Framework.
   */
readonly isSecureSiteEnabled?: bool;

/**
   * Whether this site is enabled for Bot Framework V1 protocol.
   */
readonly isV1Enabled?: bool;

/**
   * Whether this site is enabled for Bot Framework V3 protocol.
   */
readonly isV3Enabled?: bool;

/**
   * Whether this site is enabled for preview versions of Webchat
   */
readonly isWebchatPreviewEnabled?: bool;

/**
   * Whether this site is enabled for Webchat Speech
   */
readonly isWebChatSpeechEnabled?: bool;

/**
   * Site name
   */
readonly siteName: string;

/**
   * Tenant Id
   */
readonly tenantId?: string;

/**
   * List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True.
   */
readonly trustedOrigins?: string[];
}

/**
 * BotserviceBotservicesChannels resource
 */
export class BotserviceBotservicesChannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesChannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices/channels@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesChannelsProps): string {
    return JSON.stringify(
        {properties: {etag: "string", location: "string", channelName: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
