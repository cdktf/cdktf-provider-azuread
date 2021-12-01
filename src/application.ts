// https://www.terraform.io/docs/providers/azuread/r/application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this application supports device authentication without a user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#device_only_auth_enabled Application#device_only_auth_enabled}
  */
  readonly deviceOnlyAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The display name for the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#display_name Application#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies whether the application is a public client. Appropriate for apps using token grant flows that don't use a redirect URI
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#fallback_public_client_enabled Application#fallback_public_client_enabled}
  */
  readonly fallbackPublicClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#group_membership_claims Application#group_membership_claims}
  */
  readonly groupMembershipClaims?: string[];
  /**
  * The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#identifier_uris Application#identifier_uris}
  */
  readonly identifierUris?: string[];
  /**
  * Base64 encoded logo image in gif, png or jpeg format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#logo_image Application#logo_image}
  */
  readonly logoImage?: string;
  /**
  * URL of the application's marketing page
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#marketing_url Application#marketing_url}
  */
  readonly marketingUrl?: string;
  /**
  * Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#oauth2_post_response_required Application#oauth2_post_response_required}
  */
  readonly oauth2PostResponseRequired?: boolean | cdktf.IResolvable;
  /**
  * A list of object IDs of principals that will be granted ownership of the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#owners Application#owners}
  */
  readonly owners?: string[];
  /**
  * If `true`, will return an error if an existing application is found with the same name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#prevent_duplicate_names Application#prevent_duplicate_names}
  */
  readonly preventDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * URL of the application's privacy statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#privacy_statement_url Application#privacy_statement_url}
  */
  readonly privacyStatementUrl?: string;
  /**
  * The Microsoft account types that are supported for the current application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#sign_in_audience Application#sign_in_audience}
  */
  readonly signInAudience?: string;
  /**
  * URL of the application's support page
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#support_url Application#support_url}
  */
  readonly supportUrl?: string;
  /**
  * A set of tags to apply to the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#tags Application#tags}
  */
  readonly tags?: string[];
  /**
  * Unique ID of the application template from which this application is created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#template_id Application#template_id}
  */
  readonly templateId?: string;
  /**
  * URL of the application's terms of service statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#terms_of_service_url Application#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
  /**
  * api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#api Application#api}
  */
  readonly api?: ApplicationApi;
  /**
  * app_role block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#app_role Application#app_role}
  */
  readonly appRole?: ApplicationAppRole[];
  /**
  * feature_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#feature_tags Application#feature_tags}
  */
  readonly featureTags?: ApplicationFeatureTags[];
  /**
  * optional_claims block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#optional_claims Application#optional_claims}
  */
  readonly optionalClaims?: ApplicationOptionalClaims;
  /**
  * public_client block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#public_client Application#public_client}
  */
  readonly publicClient?: ApplicationPublicClient;
  /**
  * required_resource_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#required_resource_access Application#required_resource_access}
  */
  readonly requiredResourceAccess?: ApplicationRequiredResourceAccess[];
  /**
  * single_page_application block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#single_page_application Application#single_page_application}
  */
  readonly singlePageApplication?: ApplicationSinglePageApplication;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#timeouts Application#timeouts}
  */
  readonly timeouts?: ApplicationTimeouts;
  /**
  * web block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#web Application#web}
  */
  readonly web?: ApplicationWeb;
}
export interface ApplicationApiOauth2PermissionScope {
  /**
  * Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#admin_consent_description Application#admin_consent_description}
  */
  readonly adminConsentDescription?: string;
  /**
  * Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#admin_consent_display_name Application#admin_consent_display_name}
  */
  readonly adminConsentDisplayName?: string;
  /**
  * Determines if the permission scope is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the delegated permission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}
  */
  readonly id: string;
  /**
  * Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#type Application#type}
  */
  readonly type?: string;
  /**
  * Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#user_consent_description Application#user_consent_description}
  */
  readonly userConsentDescription?: string;
  /**
  * Display name for the delegated permission that appears in the end user consent experience
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#user_consent_display_name Application#user_consent_display_name}
  */
  readonly userConsentDisplayName?: string;
  /**
  * The value that is used for the `scp` claim in OAuth 2.0 access tokens
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#value Application#value}
  */
  readonly value?: string;
}

export function applicationApiOauth2PermissionScopeToTerraform(struct?: ApplicationApiOauth2PermissionScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_consent_description: cdktf.stringToTerraform(struct!.adminConsentDescription),
    admin_consent_display_name: cdktf.stringToTerraform(struct!.adminConsentDisplayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    user_consent_description: cdktf.stringToTerraform(struct!.userConsentDescription),
    user_consent_display_name: cdktf.stringToTerraform(struct!.userConsentDisplayName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApplicationApi {
  /**
  * Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#known_client_applications Application#known_client_applications}
  */
  readonly knownClientApplications?: string[];
  /**
  * Allows an application to use claims mapping without specifying a custom signing key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#mapped_claims_enabled Application#mapped_claims_enabled}
  */
  readonly mappedClaimsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The access token version expected by this resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#requested_access_token_version Application#requested_access_token_version}
  */
  readonly requestedAccessTokenVersion?: number;
  /**
  * oauth2_permission_scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#oauth2_permission_scope Application#oauth2_permission_scope}
  */
  readonly oauth2PermissionScope?: ApplicationApiOauth2PermissionScope[];
}

export function applicationApiToTerraform(struct?: ApplicationApiOutputReference | ApplicationApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_client_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.knownClientApplications),
    mapped_claims_enabled: cdktf.booleanToTerraform(struct!.mappedClaimsEnabled),
    requested_access_token_version: cdktf.numberToTerraform(struct!.requestedAccessTokenVersion),
    oauth2_permission_scope: cdktf.listMapper(applicationApiOauth2PermissionScopeToTerraform)(struct!.oauth2PermissionScope),
  }
}

export class ApplicationApiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationApi | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._knownClientApplications) {
      hasAnyValues = true;
      internalValueResult.knownClientApplications = this._knownClientApplications;
    }
    if (this._mappedClaimsEnabled) {
      hasAnyValues = true;
      internalValueResult.mappedClaimsEnabled = this._mappedClaimsEnabled;
    }
    if (this._requestedAccessTokenVersion) {
      hasAnyValues = true;
      internalValueResult.requestedAccessTokenVersion = this._requestedAccessTokenVersion;
    }
    if (this._oauth2PermissionScope) {
      hasAnyValues = true;
      internalValueResult.oauth2PermissionScope = this._oauth2PermissionScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationApi | undefined) {
    if (value === undefined) {
      this._knownClientApplications = undefined;
      this._mappedClaimsEnabled = undefined;
      this._requestedAccessTokenVersion = undefined;
      this._oauth2PermissionScope = undefined;
    }
    else {
      this._knownClientApplications = value.knownClientApplications;
      this._mappedClaimsEnabled = value.mappedClaimsEnabled;
      this._requestedAccessTokenVersion = value.requestedAccessTokenVersion;
      this._oauth2PermissionScope = value.oauth2PermissionScope;
    }
  }

  // known_client_applications - computed: false, optional: true, required: false
  private _knownClientApplications?: string[]; 
  public get knownClientApplications() {
    return this.getListAttribute('known_client_applications');
  }
  public set knownClientApplications(value: string[]) {
    this._knownClientApplications = value;
  }
  public resetKnownClientApplications() {
    this._knownClientApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownClientApplicationsInput() {
    return this._knownClientApplications;
  }

  // mapped_claims_enabled - computed: false, optional: true, required: false
  private _mappedClaimsEnabled?: boolean | cdktf.IResolvable; 
  public get mappedClaimsEnabled() {
    return this.getBooleanAttribute('mapped_claims_enabled') as any;
  }
  public set mappedClaimsEnabled(value: boolean | cdktf.IResolvable) {
    this._mappedClaimsEnabled = value;
  }
  public resetMappedClaimsEnabled() {
    this._mappedClaimsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedClaimsEnabledInput() {
    return this._mappedClaimsEnabled;
  }

  // requested_access_token_version - computed: false, optional: true, required: false
  private _requestedAccessTokenVersion?: number; 
  public get requestedAccessTokenVersion() {
    return this.getNumberAttribute('requested_access_token_version');
  }
  public set requestedAccessTokenVersion(value: number) {
    this._requestedAccessTokenVersion = value;
  }
  public resetRequestedAccessTokenVersion() {
    this._requestedAccessTokenVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedAccessTokenVersionInput() {
    return this._requestedAccessTokenVersion;
  }

  // oauth2_permission_scope - computed: false, optional: true, required: false
  private _oauth2PermissionScope?: ApplicationApiOauth2PermissionScope[]; 
  public get oauth2PermissionScope() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oauth2_permission_scope') as any;
  }
  public set oauth2PermissionScope(value: ApplicationApiOauth2PermissionScope[]) {
    this._oauth2PermissionScope = value;
  }
  public resetOauth2PermissionScope() {
    this._oauth2PermissionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PermissionScopeInput() {
    return this._oauth2PermissionScope;
  }
}
export interface ApplicationAppRole {
  /**
  * Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#allowed_member_types Application#allowed_member_types}
  */
  readonly allowedMemberTypes: string[];
  /**
  * Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#description Application#description}
  */
  readonly description: string;
  /**
  * Display name for the app role that appears during app role assignment and in consent experiences
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#display_name Application#display_name}
  */
  readonly displayName: string;
  /**
  * Determines if the app role is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the app role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}
  */
  readonly id: string;
  /**
  * The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#value Application#value}
  */
  readonly value?: string;
}

export function applicationAppRoleToTerraform(struct?: ApplicationAppRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_member_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMemberTypes),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApplicationFeatureTags {
  /**
  * Whether this application represents a custom SAML application for linked service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#custom_single_sign_on Application#custom_single_sign_on}
  */
  readonly customSingleSignOn?: boolean | cdktf.IResolvable;
  /**
  * Whether this application represents an Enterprise Application for linked service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#enterprise Application#enterprise}
  */
  readonly enterprise?: boolean | cdktf.IResolvable;
  /**
  * Whether this application represents a gallery application for linked service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#gallery Application#gallery}
  */
  readonly gallery?: boolean | cdktf.IResolvable;
  /**
  * Whether this application is invisible to users in My Apps and Office 365 Launcher
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#hide Application#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
}

export function applicationFeatureTagsToTerraform(struct?: ApplicationFeatureTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_single_sign_on: cdktf.booleanToTerraform(struct!.customSingleSignOn),
    enterprise: cdktf.booleanToTerraform(struct!.enterprise),
    gallery: cdktf.booleanToTerraform(struct!.gallery),
    hide: cdktf.booleanToTerraform(struct!.hide),
  }
}

export interface ApplicationOptionalClaimsAccessToken {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsAccessTokenToTerraform(struct?: ApplicationOptionalClaimsAccessToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ApplicationOptionalClaimsIdToken {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsIdTokenToTerraform(struct?: ApplicationOptionalClaimsIdToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ApplicationOptionalClaimsSaml2Token {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsSaml2TokenToTerraform(struct?: ApplicationOptionalClaimsSaml2Token): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface ApplicationOptionalClaims {
  /**
  * access_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#access_token Application#access_token}
  */
  readonly accessToken?: ApplicationOptionalClaimsAccessToken[];
  /**
  * id_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id_token Application#id_token}
  */
  readonly idToken?: ApplicationOptionalClaimsIdToken[];
  /**
  * saml2_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#saml2_token Application#saml2_token}
  */
  readonly saml2Token?: ApplicationOptionalClaimsSaml2Token[];
}

export function applicationOptionalClaimsToTerraform(struct?: ApplicationOptionalClaimsOutputReference | ApplicationOptionalClaims): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.listMapper(applicationOptionalClaimsAccessTokenToTerraform)(struct!.accessToken),
    id_token: cdktf.listMapper(applicationOptionalClaimsIdTokenToTerraform)(struct!.idToken),
    saml2_token: cdktf.listMapper(applicationOptionalClaimsSaml2TokenToTerraform)(struct!.saml2Token),
  }
}

export class ApplicationOptionalClaimsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationOptionalClaims | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._accessToken) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._idToken) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._saml2Token) {
      hasAnyValues = true;
      internalValueResult.saml2Token = this._saml2Token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaims | undefined) {
    if (value === undefined) {
      this._accessToken = undefined;
      this._idToken = undefined;
      this._saml2Token = undefined;
    }
    else {
      this._accessToken = value.accessToken;
      this._idToken = value.idToken;
      this._saml2Token = value.saml2Token;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: ApplicationOptionalClaimsAccessToken[]; 
  public get accessToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_token') as any;
  }
  public set accessToken(value: ApplicationOptionalClaimsAccessToken[]) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken?: ApplicationOptionalClaimsIdToken[]; 
  public get idToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('id_token') as any;
  }
  public set idToken(value: ApplicationOptionalClaimsIdToken[]) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // saml2_token - computed: false, optional: true, required: false
  private _saml2Token?: ApplicationOptionalClaimsSaml2Token[]; 
  public get saml2Token() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('saml2_token') as any;
  }
  public set saml2Token(value: ApplicationOptionalClaimsSaml2Token[]) {
    this._saml2Token = value;
  }
  public resetSaml2Token() {
    this._saml2Token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2TokenInput() {
    return this._saml2Token;
  }
}
export interface ApplicationPublicClient {
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
}

export function applicationPublicClientToTerraform(struct?: ApplicationPublicClientOutputReference | ApplicationPublicClient): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.redirectUris),
  }
}

export class ApplicationPublicClientOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationPublicClient | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._redirectUris) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPublicClient | undefined) {
    if (value === undefined) {
      this._redirectUris = undefined;
    }
    else {
      this._redirectUris = value.redirectUris;
    }
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }
}
export interface ApplicationRequiredResourceAccessResourceAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id Application#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#type Application#type}
  */
  readonly type: string;
}

export function applicationRequiredResourceAccessResourceAccessToTerraform(struct?: ApplicationRequiredResourceAccessResourceAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ApplicationRequiredResourceAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#resource_app_id Application#resource_app_id}
  */
  readonly resourceAppId: string;
  /**
  * resource_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#resource_access Application#resource_access}
  */
  readonly resourceAccess: ApplicationRequiredResourceAccessResourceAccess[];
}

export function applicationRequiredResourceAccessToTerraform(struct?: ApplicationRequiredResourceAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_app_id: cdktf.stringToTerraform(struct!.resourceAppId),
    resource_access: cdktf.listMapper(applicationRequiredResourceAccessResourceAccessToTerraform)(struct!.resourceAccess),
  }
}

export interface ApplicationSinglePageApplication {
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
}

export function applicationSinglePageApplicationToTerraform(struct?: ApplicationSinglePageApplicationOutputReference | ApplicationSinglePageApplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.redirectUris),
  }
}

export class ApplicationSinglePageApplicationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationSinglePageApplication | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._redirectUris) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSinglePageApplication | undefined) {
    if (value === undefined) {
      this._redirectUris = undefined;
    }
    else {
      this._redirectUris = value.redirectUris;
    }
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }
}
export interface ApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#create Application#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#delete Application#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#read Application#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#update Application#update}
  */
  readonly update?: string;
}

export function applicationTimeoutsToTerraform(struct?: ApplicationTimeoutsOutputReference | ApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ApplicationWebImplicitGrant {
  /**
  * Whether this web application can request an access token using OAuth 2.0 implicit flow
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#access_token_issuance_enabled Application#access_token_issuance_enabled}
  */
  readonly accessTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this web application can request an ID token using OAuth 2.0 implicit flow
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#id_token_issuance_enabled Application#id_token_issuance_enabled}
  */
  readonly idTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
}

export function applicationWebImplicitGrantToTerraform(struct?: ApplicationWebImplicitGrantOutputReference | ApplicationWebImplicitGrant): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_issuance_enabled: cdktf.booleanToTerraform(struct!.accessTokenIssuanceEnabled),
    id_token_issuance_enabled: cdktf.booleanToTerraform(struct!.idTokenIssuanceEnabled),
  }
}

export class ApplicationWebImplicitGrantOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationWebImplicitGrant | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._accessTokenIssuanceEnabled) {
      hasAnyValues = true;
      internalValueResult.accessTokenIssuanceEnabled = this._accessTokenIssuanceEnabled;
    }
    if (this._idTokenIssuanceEnabled) {
      hasAnyValues = true;
      internalValueResult.idTokenIssuanceEnabled = this._idTokenIssuanceEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWebImplicitGrant | undefined) {
    if (value === undefined) {
      this._accessTokenIssuanceEnabled = undefined;
      this._idTokenIssuanceEnabled = undefined;
    }
    else {
      this._accessTokenIssuanceEnabled = value.accessTokenIssuanceEnabled;
      this._idTokenIssuanceEnabled = value.idTokenIssuanceEnabled;
    }
  }

  // access_token_issuance_enabled - computed: false, optional: true, required: false
  private _accessTokenIssuanceEnabled?: boolean | cdktf.IResolvable; 
  public get accessTokenIssuanceEnabled() {
    return this.getBooleanAttribute('access_token_issuance_enabled') as any;
  }
  public set accessTokenIssuanceEnabled(value: boolean | cdktf.IResolvable) {
    this._accessTokenIssuanceEnabled = value;
  }
  public resetAccessTokenIssuanceEnabled() {
    this._accessTokenIssuanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIssuanceEnabledInput() {
    return this._accessTokenIssuanceEnabled;
  }

  // id_token_issuance_enabled - computed: false, optional: true, required: false
  private _idTokenIssuanceEnabled?: boolean | cdktf.IResolvable; 
  public get idTokenIssuanceEnabled() {
    return this.getBooleanAttribute('id_token_issuance_enabled') as any;
  }
  public set idTokenIssuanceEnabled(value: boolean | cdktf.IResolvable) {
    this._idTokenIssuanceEnabled = value;
  }
  public resetIdTokenIssuanceEnabled() {
    this._idTokenIssuanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenIssuanceEnabledInput() {
    return this._idTokenIssuanceEnabled;
  }
}
export interface ApplicationWeb {
  /**
  * Home page or landing page of the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#homepage_url Application#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#logout_url Application#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * implicit_grant block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application.html#implicit_grant Application#implicit_grant}
  */
  readonly implicitGrant?: ApplicationWebImplicitGrant;
}

export function applicationWebToTerraform(struct?: ApplicationWebOutputReference | ApplicationWeb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    homepage_url: cdktf.stringToTerraform(struct!.homepageUrl),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.redirectUris),
    implicit_grant: applicationWebImplicitGrantToTerraform(struct!.implicitGrant),
  }
}

export class ApplicationWebOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationWeb | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._homepageUrl) {
      hasAnyValues = true;
      internalValueResult.homepageUrl = this._homepageUrl;
    }
    if (this._logoutUrl) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._redirectUris) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._implicitGrant) {
      hasAnyValues = true;
      internalValueResult.implicitGrant = this._implicitGrant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWeb | undefined) {
    if (value === undefined) {
      this._homepageUrl = undefined;
      this._logoutUrl = undefined;
      this._redirectUris = undefined;
      this._implicitGrant.internalValue = undefined;
    }
    else {
      this._homepageUrl = value.homepageUrl;
      this._logoutUrl = value.logoutUrl;
      this._redirectUris = value.redirectUris;
      this._implicitGrant.internalValue = value.implicitGrant;
    }
  }

  // homepage_url - computed: false, optional: true, required: false
  private _homepageUrl?: string; 
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }
  public set homepageUrl(value: string) {
    this._homepageUrl = value;
  }
  public resetHomepageUrl() {
    this._homepageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageUrlInput() {
    return this._homepageUrl;
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // implicit_grant - computed: false, optional: true, required: false
  private _implicitGrant = new ApplicationWebImplicitGrantOutputReference(this as any, "implicit_grant", true);
  public get implicitGrant() {
    return this._implicitGrant;
  }
  public putImplicitGrant(value: ApplicationWebImplicitGrant) {
    this._implicitGrant.internalValue = value;
  }
  public resetImplicitGrant() {
    this._implicitGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitGrantInput() {
    return this._implicitGrant.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application.html azuread_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/application.html azuread_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceOnlyAuthEnabled = config.deviceOnlyAuthEnabled;
    this._displayName = config.displayName;
    this._fallbackPublicClientEnabled = config.fallbackPublicClientEnabled;
    this._groupMembershipClaims = config.groupMembershipClaims;
    this._identifierUris = config.identifierUris;
    this._logoImage = config.logoImage;
    this._marketingUrl = config.marketingUrl;
    this._oauth2PostResponseRequired = config.oauth2PostResponseRequired;
    this._owners = config.owners;
    this._preventDuplicateNames = config.preventDuplicateNames;
    this._privacyStatementUrl = config.privacyStatementUrl;
    this._signInAudience = config.signInAudience;
    this._supportUrl = config.supportUrl;
    this._tags = config.tags;
    this._templateId = config.templateId;
    this._termsOfServiceUrl = config.termsOfServiceUrl;
    this._api.internalValue = config.api;
    this._appRole = config.appRole;
    this._featureTags = config.featureTags;
    this._optionalClaims.internalValue = config.optionalClaims;
    this._publicClient.internalValue = config.publicClient;
    this._requiredResourceAccess = config.requiredResourceAccess;
    this._singlePageApplication.internalValue = config.singlePageApplication;
    this._timeouts.internalValue = config.timeouts;
    this._web.internalValue = config.web;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_role_ids - computed: true, optional: false, required: false
  public appRoleIds(key: string): string {
    return new cdktf.StringMap(this, 'app_role_ids').lookup(key);
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // device_only_auth_enabled - computed: false, optional: true, required: false
  private _deviceOnlyAuthEnabled?: boolean | cdktf.IResolvable; 
  public get deviceOnlyAuthEnabled() {
    return this.getBooleanAttribute('device_only_auth_enabled') as any;
  }
  public set deviceOnlyAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._deviceOnlyAuthEnabled = value;
  }
  public resetDeviceOnlyAuthEnabled() {
    this._deviceOnlyAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOnlyAuthEnabledInput() {
    return this._deviceOnlyAuthEnabled;
  }

  // disabled_by_microsoft - computed: true, optional: false, required: false
  public get disabledByMicrosoft() {
    return this.getStringAttribute('disabled_by_microsoft');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fallback_public_client_enabled - computed: false, optional: true, required: false
  private _fallbackPublicClientEnabled?: boolean | cdktf.IResolvable; 
  public get fallbackPublicClientEnabled() {
    return this.getBooleanAttribute('fallback_public_client_enabled') as any;
  }
  public set fallbackPublicClientEnabled(value: boolean | cdktf.IResolvable) {
    this._fallbackPublicClientEnabled = value;
  }
  public resetFallbackPublicClientEnabled() {
    this._fallbackPublicClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPublicClientEnabledInput() {
    return this._fallbackPublicClientEnabled;
  }

  // group_membership_claims - computed: false, optional: true, required: false
  private _groupMembershipClaims?: string[]; 
  public get groupMembershipClaims() {
    return this.getListAttribute('group_membership_claims');
  }
  public set groupMembershipClaims(value: string[]) {
    this._groupMembershipClaims = value;
  }
  public resetGroupMembershipClaims() {
    this._groupMembershipClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipClaimsInput() {
    return this._groupMembershipClaims;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_uris - computed: false, optional: true, required: false
  private _identifierUris?: string[]; 
  public get identifierUris() {
    return this.getListAttribute('identifier_uris');
  }
  public set identifierUris(value: string[]) {
    this._identifierUris = value;
  }
  public resetIdentifierUris() {
    this._identifierUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierUrisInput() {
    return this._identifierUris;
  }

  // logo_image - computed: false, optional: true, required: false
  private _logoImage?: string; 
  public get logoImage() {
    return this.getStringAttribute('logo_image');
  }
  public set logoImage(value: string) {
    this._logoImage = value;
  }
  public resetLogoImage() {
    this._logoImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageInput() {
    return this._logoImage;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // marketing_url - computed: false, optional: true, required: false
  private _marketingUrl?: string; 
  public get marketingUrl() {
    return this.getStringAttribute('marketing_url');
  }
  public set marketingUrl(value: string) {
    this._marketingUrl = value;
  }
  public resetMarketingUrl() {
    this._marketingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingUrlInput() {
    return this._marketingUrl;
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  public oauth2PermissionScopeIds(key: string): string {
    return new cdktf.StringMap(this, 'oauth2_permission_scope_ids').lookup(key);
  }

  // oauth2_post_response_required - computed: false, optional: true, required: false
  private _oauth2PostResponseRequired?: boolean | cdktf.IResolvable; 
  public get oauth2PostResponseRequired() {
    return this.getBooleanAttribute('oauth2_post_response_required') as any;
  }
  public set oauth2PostResponseRequired(value: boolean | cdktf.IResolvable) {
    this._oauth2PostResponseRequired = value;
  }
  public resetOauth2PostResponseRequired() {
    this._oauth2PostResponseRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PostResponseRequiredInput() {
    return this._oauth2PostResponseRequired;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // prevent_duplicate_names - computed: false, optional: true, required: false
  private _preventDuplicateNames?: boolean | cdktf.IResolvable; 
  public get preventDuplicateNames() {
    return this.getBooleanAttribute('prevent_duplicate_names') as any;
  }
  public set preventDuplicateNames(value: boolean | cdktf.IResolvable) {
    this._preventDuplicateNames = value;
  }
  public resetPreventDuplicateNames() {
    this._preventDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDuplicateNamesInput() {
    return this._preventDuplicateNames;
  }

  // privacy_statement_url - computed: false, optional: true, required: false
  private _privacyStatementUrl?: string; 
  public get privacyStatementUrl() {
    return this.getStringAttribute('privacy_statement_url');
  }
  public set privacyStatementUrl(value: string) {
    this._privacyStatementUrl = value;
  }
  public resetPrivacyStatementUrl() {
    this._privacyStatementUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyStatementUrlInput() {
    return this._privacyStatementUrl;
  }

  // publisher_domain - computed: true, optional: false, required: false
  public get publisherDomain() {
    return this.getStringAttribute('publisher_domain');
  }

  // sign_in_audience - computed: false, optional: true, required: false
  private _signInAudience?: string; 
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }
  public set signInAudience(value: string) {
    this._signInAudience = value;
  }
  public resetSignInAudience() {
    this._signInAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInAudienceInput() {
    return this._signInAudience;
  }

  // support_url - computed: false, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // terms_of_service_url - computed: false, optional: true, required: false
  private _termsOfServiceUrl?: string; 
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
  public set termsOfServiceUrl(value: string) {
    this._termsOfServiceUrl = value;
  }
  public resetTermsOfServiceUrl() {
    this._termsOfServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceUrlInput() {
    return this._termsOfServiceUrl;
  }

  // api - computed: false, optional: true, required: false
  private _api = new ApplicationApiOutputReference(this as any, "api", true);
  public get api() {
    return this._api;
  }
  public putApi(value: ApplicationApi) {
    this._api.internalValue = value;
  }
  public resetApi() {
    this._api.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // app_role - computed: false, optional: true, required: false
  private _appRole?: ApplicationAppRole[]; 
  public get appRole() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_role') as any;
  }
  public set appRole(value: ApplicationAppRole[]) {
    this._appRole = value;
  }
  public resetAppRole() {
    this._appRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleInput() {
    return this._appRole;
  }

  // feature_tags - computed: false, optional: true, required: false
  private _featureTags?: ApplicationFeatureTags[]; 
  public get featureTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('feature_tags') as any;
  }
  public set featureTags(value: ApplicationFeatureTags[]) {
    this._featureTags = value;
  }
  public resetFeatureTags() {
    this._featureTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTagsInput() {
    return this._featureTags;
  }

  // optional_claims - computed: false, optional: true, required: false
  private _optionalClaims = new ApplicationOptionalClaimsOutputReference(this as any, "optional_claims", true);
  public get optionalClaims() {
    return this._optionalClaims;
  }
  public putOptionalClaims(value: ApplicationOptionalClaims) {
    this._optionalClaims.internalValue = value;
  }
  public resetOptionalClaims() {
    this._optionalClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalClaimsInput() {
    return this._optionalClaims.internalValue;
  }

  // public_client - computed: false, optional: true, required: false
  private _publicClient = new ApplicationPublicClientOutputReference(this as any, "public_client", true);
  public get publicClient() {
    return this._publicClient;
  }
  public putPublicClient(value: ApplicationPublicClient) {
    this._publicClient.internalValue = value;
  }
  public resetPublicClient() {
    this._publicClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicClientInput() {
    return this._publicClient.internalValue;
  }

  // required_resource_access - computed: false, optional: true, required: false
  private _requiredResourceAccess?: ApplicationRequiredResourceAccess[]; 
  public get requiredResourceAccess() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_resource_access') as any;
  }
  public set requiredResourceAccess(value: ApplicationRequiredResourceAccess[]) {
    this._requiredResourceAccess = value;
  }
  public resetRequiredResourceAccess() {
    this._requiredResourceAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredResourceAccessInput() {
    return this._requiredResourceAccess;
  }

  // single_page_application - computed: false, optional: true, required: false
  private _singlePageApplication = new ApplicationSinglePageApplicationOutputReference(this as any, "single_page_application", true);
  public get singlePageApplication() {
    return this._singlePageApplication;
  }
  public putSinglePageApplication(value: ApplicationSinglePageApplication) {
    this._singlePageApplication.internalValue = value;
  }
  public resetSinglePageApplication() {
    this._singlePageApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePageApplicationInput() {
    return this._singlePageApplication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new ApplicationWebOutputReference(this as any, "web", true);
  public get web() {
    return this._web;
  }
  public putWeb(value: ApplicationWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_only_auth_enabled: cdktf.booleanToTerraform(this._deviceOnlyAuthEnabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      fallback_public_client_enabled: cdktf.booleanToTerraform(this._fallbackPublicClientEnabled),
      group_membership_claims: cdktf.listMapper(cdktf.stringToTerraform)(this._groupMembershipClaims),
      identifier_uris: cdktf.listMapper(cdktf.stringToTerraform)(this._identifierUris),
      logo_image: cdktf.stringToTerraform(this._logoImage),
      marketing_url: cdktf.stringToTerraform(this._marketingUrl),
      oauth2_post_response_required: cdktf.booleanToTerraform(this._oauth2PostResponseRequired),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      prevent_duplicate_names: cdktf.booleanToTerraform(this._preventDuplicateNames),
      privacy_statement_url: cdktf.stringToTerraform(this._privacyStatementUrl),
      sign_in_audience: cdktf.stringToTerraform(this._signInAudience),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      terms_of_service_url: cdktf.stringToTerraform(this._termsOfServiceUrl),
      api: applicationApiToTerraform(this._api.internalValue),
      app_role: cdktf.listMapper(applicationAppRoleToTerraform)(this._appRole),
      feature_tags: cdktf.listMapper(applicationFeatureTagsToTerraform)(this._featureTags),
      optional_claims: applicationOptionalClaimsToTerraform(this._optionalClaims.internalValue),
      public_client: applicationPublicClientToTerraform(this._publicClient.internalValue),
      required_resource_access: cdktf.listMapper(applicationRequiredResourceAccessToTerraform)(this._requiredResourceAccess),
      single_page_application: applicationSinglePageApplicationToTerraform(this._singlePageApplication.internalValue),
      timeouts: applicationTimeoutsToTerraform(this._timeouts.internalValue),
      web: applicationWebToTerraform(this._web.internalValue),
    };
  }
}
