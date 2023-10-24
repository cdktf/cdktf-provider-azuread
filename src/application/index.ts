/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the application as shown to end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * Specifies whether this application supports device authentication without a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}
  */
  readonly deviceOnlyAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The display name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#display_name Application#display_name}
  */
  readonly displayName: string;
  /**
  * Specifies whether the application is a public client. Appropriate for apps using token grant flows that don't use a redirect URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}
  */
  readonly fallbackPublicClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#group_membership_claims Application#group_membership_claims}
  */
  readonly groupMembershipClaims?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#identifier_uris Application#identifier_uris}
  */
  readonly identifierUris?: string[];
  /**
  * Base64 encoded logo image in gif, png or jpeg format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#logo_image Application#logo_image}
  */
  readonly logoImage?: string;
  /**
  * URL of the application's marketing page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#marketing_url Application#marketing_url}
  */
  readonly marketingUrl?: string;
  /**
  * User-specified notes relevant for the management of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#notes Application#notes}
  */
  readonly notes?: string;
  /**
  * Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}
  */
  readonly oauth2PostResponseRequired?: boolean | cdktf.IResolvable;
  /**
  * A list of object IDs of principals that will be granted ownership of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#owners Application#owners}
  */
  readonly owners?: string[];
  /**
  * If `true`, will return an error if an existing application is found with the same name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}
  */
  readonly preventDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * URL of the application's privacy statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#privacy_statement_url Application#privacy_statement_url}
  */
  readonly privacyStatementUrl?: string;
  /**
  * References application or service contact information from a Service or Asset Management database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#service_management_reference Application#service_management_reference}
  */
  readonly serviceManagementReference?: string;
  /**
  * The Microsoft account types that are supported for the current application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#sign_in_audience Application#sign_in_audience}
  */
  readonly signInAudience?: string;
  /**
  * URL of the application's support page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#support_url Application#support_url}
  */
  readonly supportUrl?: string;
  /**
  * A set of tags to apply to the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#tags Application#tags}
  */
  readonly tags?: string[];
  /**
  * Unique ID of the application template from which this application is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#template_id Application#template_id}
  */
  readonly templateId?: string;
  /**
  * URL of the application's terms of service statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#terms_of_service_url Application#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
  /**
  * api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#api Application#api}
  */
  readonly api?: ApplicationApi;
  /**
  * app_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#app_role Application#app_role}
  */
  readonly appRole?: ApplicationAppRole[] | cdktf.IResolvable;
  /**
  * feature_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#feature_tags Application#feature_tags}
  */
  readonly featureTags?: ApplicationFeatureTags[] | cdktf.IResolvable;
  /**
  * optional_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#optional_claims Application#optional_claims}
  */
  readonly optionalClaims?: ApplicationOptionalClaims;
  /**
  * public_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#public_client Application#public_client}
  */
  readonly publicClient?: ApplicationPublicClient;
  /**
  * required_resource_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#required_resource_access Application#required_resource_access}
  */
  readonly requiredResourceAccess?: ApplicationRequiredResourceAccess[] | cdktf.IResolvable;
  /**
  * single_page_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#single_page_application Application#single_page_application}
  */
  readonly singlePageApplication?: ApplicationSinglePageApplication;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#timeouts Application#timeouts}
  */
  readonly timeouts?: ApplicationTimeouts;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#web Application#web}
  */
  readonly web?: ApplicationWeb;
}
export interface ApplicationApiOauth2PermissionScope {
  /**
  * Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#admin_consent_description Application#admin_consent_description}
  */
  readonly adminConsentDescription?: string;
  /**
  * Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}
  */
  readonly adminConsentDisplayName?: string;
  /**
  * Determines if the permission scope is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the delegated permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#user_consent_description Application#user_consent_description}
  */
  readonly userConsentDescription?: string;
  /**
  * Display name for the delegated permission that appears in the end user consent experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#user_consent_display_name Application#user_consent_display_name}
  */
  readonly userConsentDisplayName?: string;
  /**
  * The value that is used for the `scp` claim in OAuth 2.0 access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationApiOauth2PermissionScopeToTerraform(struct?: ApplicationApiOauth2PermissionScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ApplicationApiOauth2PermissionScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationApiOauth2PermissionScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminConsentDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminConsentDescription = this._adminConsentDescription;
    }
    if (this._adminConsentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminConsentDisplayName = this._adminConsentDisplayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userConsentDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConsentDescription = this._userConsentDescription;
    }
    if (this._userConsentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConsentDisplayName = this._userConsentDisplayName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationApiOauth2PermissionScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminConsentDescription = undefined;
      this._adminConsentDisplayName = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._type = undefined;
      this._userConsentDescription = undefined;
      this._userConsentDisplayName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminConsentDescription = value.adminConsentDescription;
      this._adminConsentDisplayName = value.adminConsentDisplayName;
      this._enabled = value.enabled;
      this._id = value.id;
      this._type = value.type;
      this._userConsentDescription = value.userConsentDescription;
      this._userConsentDisplayName = value.userConsentDisplayName;
      this._value = value.value;
    }
  }

  // admin_consent_description - computed: false, optional: true, required: false
  private _adminConsentDescription?: string; 
  public get adminConsentDescription() {
    return this.getStringAttribute('admin_consent_description');
  }
  public set adminConsentDescription(value: string) {
    this._adminConsentDescription = value;
  }
  public resetAdminConsentDescription() {
    this._adminConsentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsentDescriptionInput() {
    return this._adminConsentDescription;
  }

  // admin_consent_display_name - computed: false, optional: true, required: false
  private _adminConsentDisplayName?: string; 
  public get adminConsentDisplayName() {
    return this.getStringAttribute('admin_consent_display_name');
  }
  public set adminConsentDisplayName(value: string) {
    this._adminConsentDisplayName = value;
  }
  public resetAdminConsentDisplayName() {
    this._adminConsentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsentDisplayNameInput() {
    return this._adminConsentDisplayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_consent_description - computed: false, optional: true, required: false
  private _userConsentDescription?: string; 
  public get userConsentDescription() {
    return this.getStringAttribute('user_consent_description');
  }
  public set userConsentDescription(value: string) {
    this._userConsentDescription = value;
  }
  public resetUserConsentDescription() {
    this._userConsentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentDescriptionInput() {
    return this._userConsentDescription;
  }

  // user_consent_display_name - computed: false, optional: true, required: false
  private _userConsentDisplayName?: string; 
  public get userConsentDisplayName() {
    return this.getStringAttribute('user_consent_display_name');
  }
  public set userConsentDisplayName(value: string) {
    this._userConsentDisplayName = value;
  }
  public resetUserConsentDisplayName() {
    this._userConsentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentDisplayNameInput() {
    return this._userConsentDisplayName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationApiOauth2PermissionScopeList extends cdktf.ComplexList {
  public internalValue? : ApplicationApiOauth2PermissionScope[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationApiOauth2PermissionScopeOutputReference {
    return new ApplicationApiOauth2PermissionScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationApi {
  /**
  * Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#known_client_applications Application#known_client_applications}
  */
  readonly knownClientApplications?: string[];
  /**
  * Allows an application to use claims mapping without specifying a custom signing key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}
  */
  readonly mappedClaimsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The access token version expected by this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#requested_access_token_version Application#requested_access_token_version}
  */
  readonly requestedAccessTokenVersion?: number;
  /**
  * oauth2_permission_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}
  */
  readonly oauth2PermissionScope?: ApplicationApiOauth2PermissionScope[] | cdktf.IResolvable;
}

export function applicationApiToTerraform(struct?: ApplicationApiOutputReference | ApplicationApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_client_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownClientApplications),
    mapped_claims_enabled: cdktf.booleanToTerraform(struct!.mappedClaimsEnabled),
    requested_access_token_version: cdktf.numberToTerraform(struct!.requestedAccessTokenVersion),
    oauth2_permission_scope: cdktf.listMapper(applicationApiOauth2PermissionScopeToTerraform, true)(struct!.oauth2PermissionScope),
  }
}

export class ApplicationApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownClientApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownClientApplications = this._knownClientApplications;
    }
    if (this._mappedClaimsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedClaimsEnabled = this._mappedClaimsEnabled;
    }
    if (this._requestedAccessTokenVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedAccessTokenVersion = this._requestedAccessTokenVersion;
    }
    if (this._oauth2PermissionScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2PermissionScope = this._oauth2PermissionScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knownClientApplications = undefined;
      this._mappedClaimsEnabled = undefined;
      this._requestedAccessTokenVersion = undefined;
      this._oauth2PermissionScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knownClientApplications = value.knownClientApplications;
      this._mappedClaimsEnabled = value.mappedClaimsEnabled;
      this._requestedAccessTokenVersion = value.requestedAccessTokenVersion;
      this._oauth2PermissionScope.internalValue = value.oauth2PermissionScope;
    }
  }

  // known_client_applications - computed: false, optional: true, required: false
  private _knownClientApplications?: string[]; 
  public get knownClientApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('known_client_applications'));
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
    return this.getBooleanAttribute('mapped_claims_enabled');
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
  private _oauth2PermissionScope = new ApplicationApiOauth2PermissionScopeList(this, "oauth2_permission_scope", true);
  public get oauth2PermissionScope() {
    return this._oauth2PermissionScope;
  }
  public putOauth2PermissionScope(value: ApplicationApiOauth2PermissionScope[] | cdktf.IResolvable) {
    this._oauth2PermissionScope.internalValue = value;
  }
  public resetOauth2PermissionScope() {
    this._oauth2PermissionScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PermissionScopeInput() {
    return this._oauth2PermissionScope.internalValue;
  }
}
export interface ApplicationAppRole {
  /**
  * Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#allowed_member_types Application#allowed_member_types}
  */
  readonly allowedMemberTypes: string[];
  /**
  * Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#description Application#description}
  */
  readonly description: string;
  /**
  * Display name for the app role that appears during app role assignment and in consent experiences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#display_name Application#display_name}
  */
  readonly displayName: string;
  /**
  * Determines if the app role is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the app role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationAppRoleToTerraform(struct?: ApplicationAppRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_member_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMemberTypes),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ApplicationAppRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationAppRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMemberTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMemberTypes = this._allowedMemberTypes;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAppRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedMemberTypes = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedMemberTypes = value.allowedMemberTypes;
      this._description = value.description;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._id = value.id;
      this._value = value.value;
    }
  }

  // allowed_member_types - computed: false, optional: false, required: true
  private _allowedMemberTypes?: string[]; 
  public get allowedMemberTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_member_types'));
  }
  public set allowedMemberTypes(value: string[]) {
    this._allowedMemberTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMemberTypesInput() {
    return this._allowedMemberTypes;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationAppRoleList extends cdktf.ComplexList {
  public internalValue? : ApplicationAppRole[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationAppRoleOutputReference {
    return new ApplicationAppRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationFeatureTags {
  /**
  * Whether this application represents a custom SAML application for linked service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}
  */
  readonly customSingleSignOn?: boolean | cdktf.IResolvable;
  /**
  * Whether this application represents an Enterprise Application for linked service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#enterprise Application#enterprise}
  */
  readonly enterprise?: boolean | cdktf.IResolvable;
  /**
  * Whether this application represents a gallery application for linked service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#gallery Application#gallery}
  */
  readonly gallery?: boolean | cdktf.IResolvable;
  /**
  * Whether this application is invisible to users in My Apps and Office 365 Launcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#hide Application#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
}

export function applicationFeatureTagsToTerraform(struct?: ApplicationFeatureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ApplicationFeatureTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationFeatureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSingleSignOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSingleSignOn = this._customSingleSignOn;
    }
    if (this._enterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterprise = this._enterprise;
    }
    if (this._gallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gallery = this._gallery;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationFeatureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customSingleSignOn = undefined;
      this._enterprise = undefined;
      this._gallery = undefined;
      this._hide = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customSingleSignOn = value.customSingleSignOn;
      this._enterprise = value.enterprise;
      this._gallery = value.gallery;
      this._hide = value.hide;
    }
  }

  // custom_single_sign_on - computed: false, optional: true, required: false
  private _customSingleSignOn?: boolean | cdktf.IResolvable; 
  public get customSingleSignOn() {
    return this.getBooleanAttribute('custom_single_sign_on');
  }
  public set customSingleSignOn(value: boolean | cdktf.IResolvable) {
    this._customSingleSignOn = value;
  }
  public resetCustomSingleSignOn() {
    this._customSingleSignOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSingleSignOnInput() {
    return this._customSingleSignOn;
  }

  // enterprise - computed: false, optional: true, required: false
  private _enterprise?: boolean | cdktf.IResolvable; 
  public get enterprise() {
    return this.getBooleanAttribute('enterprise');
  }
  public set enterprise(value: boolean | cdktf.IResolvable) {
    this._enterprise = value;
  }
  public resetEnterprise() {
    this._enterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseInput() {
    return this._enterprise;
  }

  // gallery - computed: false, optional: true, required: false
  private _gallery?: boolean | cdktf.IResolvable; 
  public get gallery() {
    return this.getBooleanAttribute('gallery');
  }
  public set gallery(value: boolean | cdktf.IResolvable) {
    this._gallery = value;
  }
  public resetGallery() {
    this._gallery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryInput() {
    return this._gallery;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: boolean | cdktf.IResolvable; 
  public get hide() {
    return this.getBooleanAttribute('hide');
  }
  public set hide(value: boolean | cdktf.IResolvable) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }
}

export class ApplicationFeatureTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationFeatureTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationFeatureTagsOutputReference {
    return new ApplicationFeatureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsAccessToken {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsAccessTokenToTerraform(struct?: ApplicationOptionalClaimsAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ApplicationOptionalClaimsAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktf.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktf.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsAccessTokenList extends cdktf.ComplexList {
  public internalValue? : ApplicationOptionalClaimsAccessToken[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsAccessTokenOutputReference {
    return new ApplicationOptionalClaimsAccessTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsIdToken {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsIdTokenToTerraform(struct?: ApplicationOptionalClaimsIdToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ApplicationOptionalClaimsIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsIdToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsIdToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktf.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktf.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsIdTokenList extends cdktf.ComplexList {
  public internalValue? : ApplicationOptionalClaimsIdToken[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsIdTokenOutputReference {
    return new ApplicationOptionalClaimsIdTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaimsSaml2Token {
  /**
  * List of additional properties of the claim. If a property exists in this list, it modifies the behaviour of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#additional_properties Application#additional_properties}
  */
  readonly additionalProperties?: string[];
  /**
  * Whether the claim specified by the client is necessary to ensure a smooth authorization experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#essential Application#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * The name of the optional claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The source of the claim. If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#source Application#source}
  */
  readonly source?: string;
}

export function applicationOptionalClaimsSaml2TokenToTerraform(struct?: ApplicationOptionalClaimsSaml2Token | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalProperties),
    essential: cdktf.booleanToTerraform(struct!.essential),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ApplicationOptionalClaimsSaml2TokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationOptionalClaimsSaml2Token | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._essential !== undefined) {
      hasAnyValues = true;
      internalValueResult.essential = this._essential;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaimsSaml2Token | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._essential = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._essential = value.essential;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string[]; 
  public get additionalProperties() {
    return this.getListAttribute('additional_properties');
  }
  public set additionalProperties(value: string[]) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // essential - computed: false, optional: true, required: false
  private _essential?: boolean | cdktf.IResolvable; 
  public get essential() {
    return this.getBooleanAttribute('essential');
  }
  public set essential(value: boolean | cdktf.IResolvable) {
    this._essential = value;
  }
  public resetEssential() {
    this._essential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialInput() {
    return this._essential;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ApplicationOptionalClaimsSaml2TokenList extends cdktf.ComplexList {
  public internalValue? : ApplicationOptionalClaimsSaml2Token[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationOptionalClaimsSaml2TokenOutputReference {
    return new ApplicationOptionalClaimsSaml2TokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationOptionalClaims {
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#access_token Application#access_token}
  */
  readonly accessToken?: ApplicationOptionalClaimsAccessToken[] | cdktf.IResolvable;
  /**
  * id_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id_token Application#id_token}
  */
  readonly idToken?: ApplicationOptionalClaimsIdToken[] | cdktf.IResolvable;
  /**
  * saml2_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#saml2_token Application#saml2_token}
  */
  readonly saml2Token?: ApplicationOptionalClaimsSaml2Token[] | cdktf.IResolvable;
}

export function applicationOptionalClaimsToTerraform(struct?: ApplicationOptionalClaimsOutputReference | ApplicationOptionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.listMapper(applicationOptionalClaimsAccessTokenToTerraform, true)(struct!.accessToken),
    id_token: cdktf.listMapper(applicationOptionalClaimsIdTokenToTerraform, true)(struct!.idToken),
    saml2_token: cdktf.listMapper(applicationOptionalClaimsSaml2TokenToTerraform, true)(struct!.saml2Token),
  }
}

export class ApplicationOptionalClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationOptionalClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    if (this._idToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken?.internalValue;
    }
    if (this._saml2Token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml2Token = this._saml2Token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOptionalClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken.internalValue = undefined;
      this._idToken.internalValue = undefined;
      this._saml2Token.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken.internalValue = value.accessToken;
      this._idToken.internalValue = value.idToken;
      this._saml2Token.internalValue = value.saml2Token;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new ApplicationOptionalClaimsAccessTokenList(this, "access_token", false);
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: ApplicationOptionalClaimsAccessToken[] | cdktf.IResolvable) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken = new ApplicationOptionalClaimsIdTokenList(this, "id_token", false);
  public get idToken() {
    return this._idToken;
  }
  public putIdToken(value: ApplicationOptionalClaimsIdToken[] | cdktf.IResolvable) {
    this._idToken.internalValue = value;
  }
  public resetIdToken() {
    this._idToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken.internalValue;
  }

  // saml2_token - computed: false, optional: true, required: false
  private _saml2Token = new ApplicationOptionalClaimsSaml2TokenList(this, "saml2_token", false);
  public get saml2Token() {
    return this._saml2Token;
  }
  public putSaml2Token(value: ApplicationOptionalClaimsSaml2Token[] | cdktf.IResolvable) {
    this._saml2Token.internalValue = value;
  }
  public resetSaml2Token() {
    this._saml2Token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2TokenInput() {
    return this._saml2Token.internalValue;
  }
}
export interface ApplicationPublicClient {
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
}

export function applicationPublicClientToTerraform(struct?: ApplicationPublicClientOutputReference | ApplicationPublicClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
  }
}

export class ApplicationPublicClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationPublicClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPublicClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUris = value.redirectUris;
    }
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationRequiredResourceAccessResourceAccessToTerraform(struct?: ApplicationRequiredResourceAccessResourceAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ApplicationRequiredResourceAccessResourceAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationRequiredResourceAccessResourceAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRequiredResourceAccessResourceAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplicationRequiredResourceAccessResourceAccessList extends cdktf.ComplexList {
  public internalValue? : ApplicationRequiredResourceAccessResourceAccess[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationRequiredResourceAccessResourceAccessOutputReference {
    return new ApplicationRequiredResourceAccessResourceAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationRequiredResourceAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#resource_app_id Application#resource_app_id}
  */
  readonly resourceAppId: string;
  /**
  * resource_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#resource_access Application#resource_access}
  */
  readonly resourceAccess: ApplicationRequiredResourceAccessResourceAccess[] | cdktf.IResolvable;
}

export function applicationRequiredResourceAccessToTerraform(struct?: ApplicationRequiredResourceAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_app_id: cdktf.stringToTerraform(struct!.resourceAppId),
    resource_access: cdktf.listMapper(applicationRequiredResourceAccessResourceAccessToTerraform, true)(struct!.resourceAccess),
  }
}

export class ApplicationRequiredResourceAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationRequiredResourceAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAppId = this._resourceAppId;
    }
    if (this._resourceAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAccess = this._resourceAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRequiredResourceAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceAppId = undefined;
      this._resourceAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceAppId = value.resourceAppId;
      this._resourceAccess.internalValue = value.resourceAccess;
    }
  }

  // resource_app_id - computed: false, optional: false, required: true
  private _resourceAppId?: string; 
  public get resourceAppId() {
    return this.getStringAttribute('resource_app_id');
  }
  public set resourceAppId(value: string) {
    this._resourceAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAppIdInput() {
    return this._resourceAppId;
  }

  // resource_access - computed: false, optional: false, required: true
  private _resourceAccess = new ApplicationRequiredResourceAccessResourceAccessList(this, "resource_access", false);
  public get resourceAccess() {
    return this._resourceAccess;
  }
  public putResourceAccess(value: ApplicationRequiredResourceAccessResourceAccess[] | cdktf.IResolvable) {
    this._resourceAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessInput() {
    return this._resourceAccess.internalValue;
  }
}

export class ApplicationRequiredResourceAccessList extends cdktf.ComplexList {
  public internalValue? : ApplicationRequiredResourceAccess[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationRequiredResourceAccessOutputReference {
    return new ApplicationRequiredResourceAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSinglePageApplication {
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
}

export function applicationSinglePageApplicationToTerraform(struct?: ApplicationSinglePageApplicationOutputReference | ApplicationSinglePageApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
  }
}

export class ApplicationSinglePageApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSinglePageApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSinglePageApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUris = value.redirectUris;
    }
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#create Application#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#delete Application#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#read Application#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#update Application#update}
  */
  readonly update?: string;
}

export function applicationTimeoutsToTerraform(struct?: ApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}
  */
  readonly accessTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this web application can request an ID token using OAuth 2.0 implicit flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}
  */
  readonly idTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
}

export function applicationWebImplicitGrantToTerraform(struct?: ApplicationWebImplicitGrantOutputReference | ApplicationWebImplicitGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_issuance_enabled: cdktf.booleanToTerraform(struct!.accessTokenIssuanceEnabled),
    id_token_issuance_enabled: cdktf.booleanToTerraform(struct!.idTokenIssuanceEnabled),
  }
}

export class ApplicationWebImplicitGrantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationWebImplicitGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenIssuanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIssuanceEnabled = this._accessTokenIssuanceEnabled;
    }
    if (this._idTokenIssuanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenIssuanceEnabled = this._idTokenIssuanceEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWebImplicitGrant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenIssuanceEnabled = undefined;
      this._idTokenIssuanceEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenIssuanceEnabled = value.accessTokenIssuanceEnabled;
      this._idTokenIssuanceEnabled = value.idTokenIssuanceEnabled;
    }
  }

  // access_token_issuance_enabled - computed: false, optional: true, required: false
  private _accessTokenIssuanceEnabled?: boolean | cdktf.IResolvable; 
  public get accessTokenIssuanceEnabled() {
    return this.getBooleanAttribute('access_token_issuance_enabled');
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
    return this.getBooleanAttribute('id_token_issuance_enabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#homepage_url Application#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#logout_url Application#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * implicit_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#implicit_grant Application#implicit_grant}
  */
  readonly implicitGrant?: ApplicationWebImplicitGrant;
}

export function applicationWebToTerraform(struct?: ApplicationWebOutputReference | ApplicationWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    homepage_url: cdktf.stringToTerraform(struct!.homepageUrl),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    implicit_grant: applicationWebImplicitGrantToTerraform(struct!.implicitGrant),
  }
}

export class ApplicationWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homepageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.homepageUrl = this._homepageUrl;
    }
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._implicitGrant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitGrant = this._implicitGrant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homepageUrl = undefined;
      this._logoutUrl = undefined;
      this._redirectUris = undefined;
      this._implicitGrant.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
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
  private _implicitGrant = new ApplicationWebImplicitGrantOutputReference(this, "implicit_grant");
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application azuread_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/application azuread_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.44.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceOnlyAuthEnabled = config.deviceOnlyAuthEnabled;
    this._displayName = config.displayName;
    this._fallbackPublicClientEnabled = config.fallbackPublicClientEnabled;
    this._groupMembershipClaims = config.groupMembershipClaims;
    this._id = config.id;
    this._identifierUris = config.identifierUris;
    this._logoImage = config.logoImage;
    this._marketingUrl = config.marketingUrl;
    this._notes = config.notes;
    this._oauth2PostResponseRequired = config.oauth2PostResponseRequired;
    this._owners = config.owners;
    this._preventDuplicateNames = config.preventDuplicateNames;
    this._privacyStatementUrl = config.privacyStatementUrl;
    this._serviceManagementReference = config.serviceManagementReference;
    this._signInAudience = config.signInAudience;
    this._supportUrl = config.supportUrl;
    this._tags = config.tags;
    this._templateId = config.templateId;
    this._termsOfServiceUrl = config.termsOfServiceUrl;
    this._api.internalValue = config.api;
    this._appRole.internalValue = config.appRole;
    this._featureTags.internalValue = config.featureTags;
    this._optionalClaims.internalValue = config.optionalClaims;
    this._publicClient.internalValue = config.publicClient;
    this._requiredResourceAccess.internalValue = config.requiredResourceAccess;
    this._singlePageApplication.internalValue = config.singlePageApplication;
    this._timeouts.internalValue = config.timeouts;
    this._web.internalValue = config.web;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_role_ids - computed: true, optional: false, required: false
  private _appRoleIds = new cdktf.StringMap(this, "app_role_ids");
  public get appRoleIds() {
    return this._appRoleIds;
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_only_auth_enabled - computed: false, optional: true, required: false
  private _deviceOnlyAuthEnabled?: boolean | cdktf.IResolvable; 
  public get deviceOnlyAuthEnabled() {
    return this.getBooleanAttribute('device_only_auth_enabled');
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
    return this.getBooleanAttribute('fallback_public_client_enabled');
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
    return cdktf.Fn.tolist(this.getListAttribute('group_membership_claims'));
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier_uris - computed: false, optional: true, required: false
  private _identifierUris?: string[]; 
  public get identifierUris() {
    return cdktf.Fn.tolist(this.getListAttribute('identifier_uris'));
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  private _oauth2PermissionScopeIds = new cdktf.StringMap(this, "oauth2_permission_scope_ids");
  public get oauth2PermissionScopeIds() {
    return this._oauth2PermissionScopeIds;
  }

  // oauth2_post_response_required - computed: false, optional: true, required: false
  private _oauth2PostResponseRequired?: boolean | cdktf.IResolvable; 
  public get oauth2PostResponseRequired() {
    return this.getBooleanAttribute('oauth2_post_response_required');
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
    return cdktf.Fn.tolist(this.getListAttribute('owners'));
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
    return this.getBooleanAttribute('prevent_duplicate_names');
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

  // service_management_reference - computed: false, optional: true, required: false
  private _serviceManagementReference?: string; 
  public get serviceManagementReference() {
    return this.getStringAttribute('service_management_reference');
  }
  public set serviceManagementReference(value: string) {
    this._serviceManagementReference = value;
  }
  public resetServiceManagementReference() {
    this._serviceManagementReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementReferenceInput() {
    return this._serviceManagementReference;
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
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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
  private _api = new ApplicationApiOutputReference(this, "api");
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
  private _appRole = new ApplicationAppRoleList(this, "app_role", true);
  public get appRole() {
    return this._appRole;
  }
  public putAppRole(value: ApplicationAppRole[] | cdktf.IResolvable) {
    this._appRole.internalValue = value;
  }
  public resetAppRole() {
    this._appRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleInput() {
    return this._appRole.internalValue;
  }

  // feature_tags - computed: false, optional: true, required: false
  private _featureTags = new ApplicationFeatureTagsList(this, "feature_tags", false);
  public get featureTags() {
    return this._featureTags;
  }
  public putFeatureTags(value: ApplicationFeatureTags[] | cdktf.IResolvable) {
    this._featureTags.internalValue = value;
  }
  public resetFeatureTags() {
    this._featureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTagsInput() {
    return this._featureTags.internalValue;
  }

  // optional_claims - computed: false, optional: true, required: false
  private _optionalClaims = new ApplicationOptionalClaimsOutputReference(this, "optional_claims");
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
  private _publicClient = new ApplicationPublicClientOutputReference(this, "public_client");
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
  private _requiredResourceAccess = new ApplicationRequiredResourceAccessList(this, "required_resource_access", true);
  public get requiredResourceAccess() {
    return this._requiredResourceAccess;
  }
  public putRequiredResourceAccess(value: ApplicationRequiredResourceAccess[] | cdktf.IResolvable) {
    this._requiredResourceAccess.internalValue = value;
  }
  public resetRequiredResourceAccess() {
    this._requiredResourceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredResourceAccessInput() {
    return this._requiredResourceAccess.internalValue;
  }

  // single_page_application - computed: false, optional: true, required: false
  private _singlePageApplication = new ApplicationSinglePageApplicationOutputReference(this, "single_page_application");
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
  private _timeouts = new ApplicationTimeoutsOutputReference(this, "timeouts");
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
  private _web = new ApplicationWebOutputReference(this, "web");
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
      description: cdktf.stringToTerraform(this._description),
      device_only_auth_enabled: cdktf.booleanToTerraform(this._deviceOnlyAuthEnabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      fallback_public_client_enabled: cdktf.booleanToTerraform(this._fallbackPublicClientEnabled),
      group_membership_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupMembershipClaims),
      id: cdktf.stringToTerraform(this._id),
      identifier_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifierUris),
      logo_image: cdktf.stringToTerraform(this._logoImage),
      marketing_url: cdktf.stringToTerraform(this._marketingUrl),
      notes: cdktf.stringToTerraform(this._notes),
      oauth2_post_response_required: cdktf.booleanToTerraform(this._oauth2PostResponseRequired),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      prevent_duplicate_names: cdktf.booleanToTerraform(this._preventDuplicateNames),
      privacy_statement_url: cdktf.stringToTerraform(this._privacyStatementUrl),
      service_management_reference: cdktf.stringToTerraform(this._serviceManagementReference),
      sign_in_audience: cdktf.stringToTerraform(this._signInAudience),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      terms_of_service_url: cdktf.stringToTerraform(this._termsOfServiceUrl),
      api: applicationApiToTerraform(this._api.internalValue),
      app_role: cdktf.listMapper(applicationAppRoleToTerraform, true)(this._appRole.internalValue),
      feature_tags: cdktf.listMapper(applicationFeatureTagsToTerraform, true)(this._featureTags.internalValue),
      optional_claims: applicationOptionalClaimsToTerraform(this._optionalClaims.internalValue),
      public_client: applicationPublicClientToTerraform(this._publicClient.internalValue),
      required_resource_access: cdktf.listMapper(applicationRequiredResourceAccessToTerraform, true)(this._requiredResourceAccess.internalValue),
      single_page_application: applicationSinglePageApplicationToTerraform(this._singlePageApplication.internalValue),
      timeouts: applicationTimeoutsToTerraform(this._timeouts.internalValue),
      web: applicationWebToTerraform(this._web.internalValue),
    };
  }
}
