/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the application as shown to end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#description ApplicationRegistration#description}
  */
  readonly description?: string;
  /**
  * The display name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#display_name ApplicationRegistration#display_name}
  */
  readonly displayName: string;
  /**
  * Configures the `groups` claim that the app expects issued in a user or OAuth access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#group_membership_claims ApplicationRegistration#group_membership_claims}
  */
  readonly groupMembershipClaims?: string[];
  /**
  * URL of the home page for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#homepage_url ApplicationRegistration#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#id ApplicationRegistration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this application can request an access token using OAuth implicit flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#implicit_access_token_issuance_enabled ApplicationRegistration#implicit_access_token_issuance_enabled}
  */
  readonly implicitAccessTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this application can request an ID token using OAuth implicit flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#implicit_id_token_issuance_enabled ApplicationRegistration#implicit_id_token_issuance_enabled}
  */
  readonly implicitIdTokenIssuanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * URL of the logout page for the application, where the session is cleared for single sign-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#logout_url ApplicationRegistration#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * URL of the marketing page for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#marketing_url ApplicationRegistration#marketing_url}
  */
  readonly marketingUrl?: string;
  /**
  * User-specified notes relevant for the management of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#notes ApplicationRegistration#notes}
  */
  readonly notes?: string;
  /**
  * URL of the privacy statement for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#privacy_statement_url ApplicationRegistration#privacy_statement_url}
  */
  readonly privacyStatementUrl?: string;
  /**
  * The access token version expected by this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#requested_access_token_version ApplicationRegistration#requested_access_token_version}
  */
  readonly requestedAccessTokenVersion?: number;
  /**
  * References application or contact information from a service or asset management database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#service_management_reference ApplicationRegistration#service_management_reference}
  */
  readonly serviceManagementReference?: string;
  /**
  * The Microsoft account types that are supported for the current application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#sign_in_audience ApplicationRegistration#sign_in_audience}
  */
  readonly signInAudience?: string;
  /**
  * URL of the support page for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#support_url ApplicationRegistration#support_url}
  */
  readonly supportUrl?: string;
  /**
  * URL of the terms of service statement for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#terms_of_service_url ApplicationRegistration#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#timeouts ApplicationRegistration#timeouts}
  */
  readonly timeouts?: ApplicationRegistrationTimeouts;
}
export interface ApplicationRegistrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#create ApplicationRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#delete ApplicationRegistration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#read ApplicationRegistration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#update ApplicationRegistration#update}
  */
  readonly update?: string;
}

export function applicationRegistrationTimeoutsToTerraform(struct?: ApplicationRegistrationTimeouts | cdktf.IResolvable): any {
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


export function applicationRegistrationTimeoutsToHclTerraform(struct?: ApplicationRegistrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationRegistrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationRegistrationTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration azuread_application_registration}
*/
export class ApplicationRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationRegistration to import
  * @param importFromId The id of the existing ApplicationRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_registration azuread_application_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_registration',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.3.0',
        providerVersionConstraint: '~> 3.0'
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
    this._displayName = config.displayName;
    this._groupMembershipClaims = config.groupMembershipClaims;
    this._homepageUrl = config.homepageUrl;
    this._id = config.id;
    this._implicitAccessTokenIssuanceEnabled = config.implicitAccessTokenIssuanceEnabled;
    this._implicitIdTokenIssuanceEnabled = config.implicitIdTokenIssuanceEnabled;
    this._logoutUrl = config.logoutUrl;
    this._marketingUrl = config.marketingUrl;
    this._notes = config.notes;
    this._privacyStatementUrl = config.privacyStatementUrl;
    this._requestedAccessTokenVersion = config.requestedAccessTokenVersion;
    this._serviceManagementReference = config.serviceManagementReference;
    this._signInAudience = config.signInAudience;
    this._supportUrl = config.supportUrl;
    this._termsOfServiceUrl = config.termsOfServiceUrl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // implicit_access_token_issuance_enabled - computed: false, optional: true, required: false
  private _implicitAccessTokenIssuanceEnabled?: boolean | cdktf.IResolvable; 
  public get implicitAccessTokenIssuanceEnabled() {
    return this.getBooleanAttribute('implicit_access_token_issuance_enabled');
  }
  public set implicitAccessTokenIssuanceEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitAccessTokenIssuanceEnabled = value;
  }
  public resetImplicitAccessTokenIssuanceEnabled() {
    this._implicitAccessTokenIssuanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAccessTokenIssuanceEnabledInput() {
    return this._implicitAccessTokenIssuanceEnabled;
  }

  // implicit_id_token_issuance_enabled - computed: false, optional: true, required: false
  private _implicitIdTokenIssuanceEnabled?: boolean | cdktf.IResolvable; 
  public get implicitIdTokenIssuanceEnabled() {
    return this.getBooleanAttribute('implicit_id_token_issuance_enabled');
  }
  public set implicitIdTokenIssuanceEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitIdTokenIssuanceEnabled = value;
  }
  public resetImplicitIdTokenIssuanceEnabled() {
    this._implicitIdTokenIssuanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitIdTokenIssuanceEnabledInput() {
    return this._implicitIdTokenIssuanceEnabled;
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

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationRegistrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationRegistrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      group_membership_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupMembershipClaims),
      homepage_url: cdktf.stringToTerraform(this._homepageUrl),
      id: cdktf.stringToTerraform(this._id),
      implicit_access_token_issuance_enabled: cdktf.booleanToTerraform(this._implicitAccessTokenIssuanceEnabled),
      implicit_id_token_issuance_enabled: cdktf.booleanToTerraform(this._implicitIdTokenIssuanceEnabled),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      marketing_url: cdktf.stringToTerraform(this._marketingUrl),
      notes: cdktf.stringToTerraform(this._notes),
      privacy_statement_url: cdktf.stringToTerraform(this._privacyStatementUrl),
      requested_access_token_version: cdktf.numberToTerraform(this._requestedAccessTokenVersion),
      service_management_reference: cdktf.stringToTerraform(this._serviceManagementReference),
      sign_in_audience: cdktf.stringToTerraform(this._signInAudience),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      terms_of_service_url: cdktf.stringToTerraform(this._termsOfServiceUrl),
      timeouts: applicationRegistrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_membership_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupMembershipClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      homepage_url: {
        value: cdktf.stringToHclTerraform(this._homepageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implicit_access_token_issuance_enabled: {
        value: cdktf.booleanToHclTerraform(this._implicitAccessTokenIssuanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      implicit_id_token_issuance_enabled: {
        value: cdktf.booleanToHclTerraform(this._implicitIdTokenIssuanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      marketing_url: {
        value: cdktf.stringToHclTerraform(this._marketingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_statement_url: {
        value: cdktf.stringToHclTerraform(this._privacyStatementUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_access_token_version: {
        value: cdktf.numberToHclTerraform(this._requestedAccessTokenVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_management_reference: {
        value: cdktf.stringToHclTerraform(this._serviceManagementReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_in_audience: {
        value: cdktf.stringToHclTerraform(this._signInAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_url: {
        value: cdktf.stringToHclTerraform(this._supportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terms_of_service_url: {
        value: cdktf.stringToHclTerraform(this._termsOfServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: applicationRegistrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationRegistrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
