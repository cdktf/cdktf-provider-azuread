// https://www.terraform.io/docs/providers/azuread/r/invitation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL that the user should be redirected to once the invitation is redeemed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#redirect_url Invitation#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * The display name of the user being invited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_display_name Invitation#user_display_name}
  */
  readonly userDisplayName?: string;
  /**
  * The email address of the user being invited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_email_address Invitation#user_email_address}
  */
  readonly userEmailAddress: string;
  /**
  * The user type of the user being invited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#user_type Invitation#user_type}
  */
  readonly userType?: string;
  /**
  * message block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#message Invitation#message}
  */
  readonly message?: InvitationMessage[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#timeouts Invitation#timeouts}
  */
  readonly timeouts?: InvitationTimeouts;
}
export interface InvitationMessage {
  /**
  * Email addresses of additional recipients the invitation message should be sent to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#additional_recipients Invitation#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Customized message body you want to send if you don't want to send the default message
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#body Invitation#body}
  */
  readonly body?: string;
  /**
  * The language you want to send the default message in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#language Invitation#language}
  */
  readonly language?: string;
}

function invitationMessageToTerraform(struct?: InvitationMessage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform)(struct!.additionalRecipients),
    body: cdktf.stringToTerraform(struct!.body),
    language: cdktf.stringToTerraform(struct!.language),
  }
}

export interface InvitationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#create Invitation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#delete Invitation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#read Invitation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html#update Invitation#update}
  */
  readonly update?: string;
}

function invitationTimeoutsToTerraform(struct?: InvitationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html azuread_invitation}
*/
export class Invitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_invitation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/invitation.html azuread_invitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InvitationConfig
  */
  public constructor(scope: Construct, id: string, config: InvitationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_invitation',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._redirectUrl = config.redirectUrl;
    this._userDisplayName = config.userDisplayName;
    this._userEmailAddress = config.userEmailAddress;
    this._userType = config.userType;
    this._message = config.message;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // redeem_url - computed: true, optional: false, required: false
  public get redeemUrl() {
    return this.getStringAttribute('redeem_url');
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl: string;
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl
  }

  // user_display_name - computed: false, optional: true, required: false
  private _userDisplayName?: string;
  public get userDisplayName() {
    return this.getStringAttribute('user_display_name');
  }
  public set userDisplayName(value: string ) {
    this._userDisplayName = value;
  }
  public resetUserDisplayName() {
    this._userDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisplayNameInput() {
    return this._userDisplayName
  }

  // user_email_address - computed: false, optional: false, required: true
  private _userEmailAddress: string;
  public get userEmailAddress() {
    return this.getStringAttribute('user_email_address');
  }
  public set userEmailAddress(value: string) {
    this._userEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailAddressInput() {
    return this._userEmailAddress
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string;
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string ) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType
  }

  // message - computed: false, optional: true, required: false
  private _message?: InvitationMessage[];
  public get message() {
    return this.interpolationForAttribute('message') as any;
  }
  public set message(value: InvitationMessage[] ) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: InvitationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: InvitationTimeouts ) {
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
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      user_display_name: cdktf.stringToTerraform(this._userDisplayName),
      user_email_address: cdktf.stringToTerraform(this._userEmailAddress),
      user_type: cdktf.stringToTerraform(this._userType),
      message: cdktf.listMapper(invitationMessageToTerraform)(this._message),
      timeouts: invitationTimeoutsToTerraform(this._timeouts),
    };
  }
}
