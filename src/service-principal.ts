// https://www.terraform.io/docs/providers/azuread/r/service_principal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the service principal account is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#account_enabled ServicePrincipal#account_enabled}
  */
  readonly accountEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#alternative_names ServicePrincipal#alternative_names}
  */
  readonly alternativeNames?: string[];
  /**
  * Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#app_role_assignment_required ServicePrincipal#app_role_assignment_required}
  */
  readonly appRoleAssignmentRequired?: boolean | cdktf.IResolvable;
  /**
  * The application ID (client ID) of the application for which to create a service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#application_id ServicePrincipal#application_id}
  */
  readonly applicationId: string;
  /**
  * Description of the service principal provided for internal end-users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#description ServicePrincipal#description}
  */
  readonly description?: string;
  /**
  * The URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#login_url ServicePrincipal#login_url}
  */
  readonly loginUrl?: string;
  /**
  * Free text field to capture information about the service principal, typically used for operational purposes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#notes ServicePrincipal#notes}
  */
  readonly notes?: string;
  /**
  * List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#notification_email_addresses ServicePrincipal#notification_email_addresses}
  */
  readonly notificationEmailAddresses?: string[];
  /**
  * A list of object IDs of principals that will be granted ownership of the service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#owners ServicePrincipal#owners}
  */
  readonly owners?: string[];
  /**
  * The single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}
  */
  readonly preferredSingleSignOnMode?: string;
  /**
  * A set of tags to apply to the service principal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#tags ServicePrincipal#tags}
  */
  readonly tags?: string[];
  /**
  * When true, the resource will return an existing service principal instead of failing with an error
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#use_existing ServicePrincipal#use_existing}
  */
  readonly useExisting?: boolean | cdktf.IResolvable;
  /**
  * feature_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#feature_tags ServicePrincipal#feature_tags}
  */
  readonly featureTags?: ServicePrincipalFeatureTags[];
  /**
  * features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#features ServicePrincipal#features}
  */
  readonly features?: ServicePrincipalFeatures[];
  /**
  * saml_single_sign_on block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#saml_single_sign_on ServicePrincipal#saml_single_sign_on}
  */
  readonly samlSingleSignOn?: ServicePrincipalSamlSingleSignOn[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#timeouts ServicePrincipal#timeouts}
  */
  readonly timeouts?: ServicePrincipalTimeouts;
}
export class ServicePrincipalAppRoles extends cdktf.ComplexComputedList {

  // allowed_member_types - computed: true, optional: false, required: false
  public get allowedMemberTypes() {
    return this.getListAttribute('allowed_member_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class ServicePrincipalOauth2PermissionScopes extends cdktf.ComplexComputedList {

  // admin_consent_description - computed: true, optional: false, required: false
  public get adminConsentDescription() {
    return this.getStringAttribute('admin_consent_description');
  }

  // admin_consent_display_name - computed: true, optional: false, required: false
  public get adminConsentDisplayName() {
    return this.getStringAttribute('admin_consent_display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_consent_description - computed: true, optional: false, required: false
  public get userConsentDescription() {
    return this.getStringAttribute('user_consent_description');
  }

  // user_consent_display_name - computed: true, optional: false, required: false
  public get userConsentDisplayName() {
    return this.getStringAttribute('user_consent_display_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ServicePrincipalFeatureTags {
  /**
  * Whether this service principal represents a custom SAML application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#custom_single_sign_on ServicePrincipal#custom_single_sign_on}
  */
  readonly customSingleSignOn?: boolean | cdktf.IResolvable;
  /**
  * Whether this service principal represents an Enterprise Application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#enterprise ServicePrincipal#enterprise}
  */
  readonly enterprise?: boolean | cdktf.IResolvable;
  /**
  * Whether this service principal represents a gallery application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#gallery ServicePrincipal#gallery}
  */
  readonly gallery?: boolean | cdktf.IResolvable;
  /**
  * Whether this app is invisible to users in My Apps and Office 365 Launcher
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#hide ServicePrincipal#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
}

function servicePrincipalFeatureTagsToTerraform(struct?: ServicePrincipalFeatureTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_single_sign_on: cdktf.booleanToTerraform(struct!.customSingleSignOn),
    enterprise: cdktf.booleanToTerraform(struct!.enterprise),
    gallery: cdktf.booleanToTerraform(struct!.gallery),
    hide: cdktf.booleanToTerraform(struct!.hide),
  }
}

export interface ServicePrincipalFeatures {
  /**
  * Whether this service principal represents a custom SAML application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#custom_single_sign_on_app ServicePrincipal#custom_single_sign_on_app}
  */
  readonly customSingleSignOnApp?: boolean | cdktf.IResolvable;
  /**
  * Whether this service principal represents an Enterprise Application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#enterprise_application ServicePrincipal#enterprise_application}
  */
  readonly enterpriseApplication?: boolean | cdktf.IResolvable;
  /**
  * Whether this service principal represents a gallery application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#gallery_application ServicePrincipal#gallery_application}
  */
  readonly galleryApplication?: boolean | cdktf.IResolvable;
  /**
  * Whether this app is visible to users in My Apps and Office 365 Launcher
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#visible_to_users ServicePrincipal#visible_to_users}
  */
  readonly visibleToUsers?: boolean | cdktf.IResolvable;
}

function servicePrincipalFeaturesToTerraform(struct?: ServicePrincipalFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_single_sign_on_app: cdktf.booleanToTerraform(struct!.customSingleSignOnApp),
    enterprise_application: cdktf.booleanToTerraform(struct!.enterpriseApplication),
    gallery_application: cdktf.booleanToTerraform(struct!.galleryApplication),
    visible_to_users: cdktf.booleanToTerraform(struct!.visibleToUsers),
  }
}

export interface ServicePrincipalSamlSingleSignOn {
  /**
  * The relative URI the service provider would redirect to after completion of the single sign-on flow
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#relay_state ServicePrincipal#relay_state}
  */
  readonly relayState?: string;
}

function servicePrincipalSamlSingleSignOnToTerraform(struct?: ServicePrincipalSamlSingleSignOn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    relay_state: cdktf.stringToTerraform(struct!.relayState),
  }
}

export interface ServicePrincipalTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#create ServicePrincipal#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#delete ServicePrincipal#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#read ServicePrincipal#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html#update ServicePrincipal#update}
  */
  readonly update?: string;
}

function servicePrincipalTimeoutsToTerraform(struct?: ServicePrincipalTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html azuread_service_principal}
*/
export class ServicePrincipal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_service_principal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal.html azuread_service_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountEnabled = config.accountEnabled;
    this._alternativeNames = config.alternativeNames;
    this._appRoleAssignmentRequired = config.appRoleAssignmentRequired;
    this._applicationId = config.applicationId;
    this._description = config.description;
    this._loginUrl = config.loginUrl;
    this._notes = config.notes;
    this._notificationEmailAddresses = config.notificationEmailAddresses;
    this._owners = config.owners;
    this._preferredSingleSignOnMode = config.preferredSingleSignOnMode;
    this._tags = config.tags;
    this._useExisting = config.useExisting;
    this._featureTags = config.featureTags;
    this._features = config.features;
    this._samlSingleSignOn = config.samlSingleSignOn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_enabled - computed: false, optional: true, required: false
  private _accountEnabled?: boolean | cdktf.IResolvable;
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }
  public set accountEnabled(value: boolean | cdktf.IResolvable ) {
    this._accountEnabled = value;
  }
  public resetAccountEnabled() {
    this._accountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEnabledInput() {
    return this._accountEnabled
  }

  // alternative_names - computed: false, optional: true, required: false
  private _alternativeNames?: string[];
  public get alternativeNames() {
    return this.getListAttribute('alternative_names');
  }
  public set alternativeNames(value: string[] ) {
    this._alternativeNames = value;
  }
  public resetAlternativeNames() {
    this._alternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeNamesInput() {
    return this._alternativeNames
  }

  // app_role_assignment_required - computed: false, optional: true, required: false
  private _appRoleAssignmentRequired?: boolean | cdktf.IResolvable;
  public get appRoleAssignmentRequired() {
    return this.getBooleanAttribute('app_role_assignment_required');
  }
  public set appRoleAssignmentRequired(value: boolean | cdktf.IResolvable ) {
    this._appRoleAssignmentRequired = value;
  }
  public resetAppRoleAssignmentRequired() {
    this._appRoleAssignmentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleAssignmentRequiredInput() {
    return this._appRoleAssignmentRequired
  }

  // app_role_ids - computed: true, optional: false, required: false
  public appRoleIds(key: string): string {
    return new cdktf.StringMap(this, 'app_role_ids').lookup(key);
  }

  // app_roles - computed: true, optional: false, required: false
  public appRoles(index: string) {
    return new ServicePrincipalAppRoles(this, 'app_roles', index);
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // application_tenant_id - computed: true, optional: false, required: false
  public get applicationTenantId() {
    return this.getStringAttribute('application_tenant_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_url - computed: false, optional: true, required: false
  private _loginUrl?: string;
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string ) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string ) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // notification_email_addresses - computed: false, optional: true, required: false
  private _notificationEmailAddresses?: string[];
  public get notificationEmailAddresses() {
    return this.getListAttribute('notification_email_addresses');
  }
  public set notificationEmailAddresses(value: string[] ) {
    this._notificationEmailAddresses = value;
  }
  public resetNotificationEmailAddresses() {
    this._notificationEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailAddressesInput() {
    return this._notificationEmailAddresses
  }

  // oauth2_permission_scope_ids - computed: true, optional: false, required: false
  public oauth2PermissionScopeIds(key: string): string {
    return new cdktf.StringMap(this, 'oauth2_permission_scope_ids').lookup(key);
  }

  // oauth2_permission_scopes - computed: true, optional: false, required: false
  public oauth2PermissionScopes(index: string) {
    return new ServicePrincipalOauth2PermissionScopes(this, 'oauth2_permission_scopes', index);
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
  public set owners(value: string[] ) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners
  }

  // preferred_single_sign_on_mode - computed: false, optional: true, required: false
  private _preferredSingleSignOnMode?: string;
  public get preferredSingleSignOnMode() {
    return this.getStringAttribute('preferred_single_sign_on_mode');
  }
  public set preferredSingleSignOnMode(value: string ) {
    this._preferredSingleSignOnMode = value;
  }
  public resetPreferredSingleSignOnMode() {
    this._preferredSingleSignOnMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSingleSignOnModeInput() {
    return this._preferredSingleSignOnMode
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }

  // service_principal_names - computed: true, optional: false, required: false
  public get servicePrincipalNames() {
    return this.getListAttribute('service_principal_names');
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
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
    return this._tags
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_existing - computed: false, optional: true, required: false
  private _useExisting?: boolean | cdktf.IResolvable;
  public get useExisting() {
    return this.getBooleanAttribute('use_existing');
  }
  public set useExisting(value: boolean | cdktf.IResolvable ) {
    this._useExisting = value;
  }
  public resetUseExisting() {
    this._useExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExistingInput() {
    return this._useExisting
  }

  // feature_tags - computed: false, optional: true, required: false
  private _featureTags?: ServicePrincipalFeatureTags[];
  public get featureTags() {
    return this.interpolationForAttribute('feature_tags') as any;
  }
  public set featureTags(value: ServicePrincipalFeatureTags[] ) {
    this._featureTags = value;
  }
  public resetFeatureTags() {
    this._featureTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTagsInput() {
    return this._featureTags
  }

  // features - computed: false, optional: true, required: false
  private _features?: ServicePrincipalFeatures[];
  public get features() {
    return this.interpolationForAttribute('features') as any;
  }
  public set features(value: ServicePrincipalFeatures[] ) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features
  }

  // saml_single_sign_on - computed: false, optional: true, required: false
  private _samlSingleSignOn?: ServicePrincipalSamlSingleSignOn[];
  public get samlSingleSignOn() {
    return this.interpolationForAttribute('saml_single_sign_on') as any;
  }
  public set samlSingleSignOn(value: ServicePrincipalSamlSingleSignOn[] ) {
    this._samlSingleSignOn = value;
  }
  public resetSamlSingleSignOn() {
    this._samlSingleSignOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSingleSignOnInput() {
    return this._samlSingleSignOn
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicePrincipalTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicePrincipalTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_enabled: cdktf.booleanToTerraform(this._accountEnabled),
      alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._alternativeNames),
      app_role_assignment_required: cdktf.booleanToTerraform(this._appRoleAssignmentRequired),
      application_id: cdktf.stringToTerraform(this._applicationId),
      description: cdktf.stringToTerraform(this._description),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      notes: cdktf.stringToTerraform(this._notes),
      notification_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmailAddresses),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      preferred_single_sign_on_mode: cdktf.stringToTerraform(this._preferredSingleSignOnMode),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      use_existing: cdktf.booleanToTerraform(this._useExisting),
      feature_tags: cdktf.listMapper(servicePrincipalFeatureTagsToTerraform)(this._featureTags),
      features: cdktf.listMapper(servicePrincipalFeaturesToTerraform)(this._features),
      saml_single_sign_on: cdktf.listMapper(servicePrincipalSamlSingleSignOnToTerraform)(this._samlSingleSignOn),
      timeouts: servicePrincipalTimeoutsToTerraform(this._timeouts),
    };
  }
}
