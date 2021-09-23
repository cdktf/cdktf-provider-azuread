// https://www.terraform.io/docs/providers/azuread/r/group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether this group can be assigned to an Azure Active Directory role. This property can only be `true` for security-enabled groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#assignable_to_role Group#assignable_to_role}
  */
  readonly assignableToRole?: boolean | cdktf.IResolvable;
  /**
  * The group behaviours for a Microsoft 365 group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#behaviors Group#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * The description for the group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#description Group#description}
  */
  readonly description?: string;
  /**
  * The display name for the group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#display_name Group#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the group is a mail enabled, with a shared group mailbox. At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled _and_ security enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#mail_enabled Group#mail_enabled}
  */
  readonly mailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The mail alias for the group, unique in the organisation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#mail_nickname Group#mail_nickname}
  */
  readonly mailNickname?: string;
  /**
  * A set of members who should be present in this group. Supported object types are Users, Groups or Service Principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#members Group#members}
  */
  readonly members?: string[];
  /**
  * A set of owners who own this group. Supported object types are Users or Service Principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#owners Group#owners}
  */
  readonly owners?: string[];
  /**
  * If `true`, will return an error if an existing group is found with the same name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#prevent_duplicate_names Group#prevent_duplicate_names}
  */
  readonly preventDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * The group provisioning options for a Microsoft 365 group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#provisioning_options Group#provisioning_options}
  */
  readonly provisioningOptions?: string[];
  /**
  * Whether the group is a security group for controlling access to in-app resources. At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled _and_ mail enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#security_enabled Group#security_enabled}
  */
  readonly securityEnabled?: boolean | cdktf.IResolvable;
  /**
  * The colour theme for a Microsoft 365 group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#theme Group#theme}
  */
  readonly theme?: string;
  /**
  * A set of group types to configure for the group. The only supported type is `Unified`, which specifies a Microsoft 365 group. Required when `mail_enabled` is true
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#types Group#types}
  */
  readonly types?: string[];
  /**
  * Specifies the group join policy and group content visibility
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#visibility Group#visibility}
  */
  readonly visibility?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#timeouts Group#timeouts}
  */
  readonly timeouts?: GroupTimeouts;
}
export interface GroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#create Group#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#delete Group#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#read Group#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group.html#update Group#update}
  */
  readonly update?: string;
}

function groupTimeoutsToTerraform(struct?: GroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/group.html azuread_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/group.html azuread_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_group',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignableToRole = config.assignableToRole;
    this._behaviors = config.behaviors;
    this._description = config.description;
    this._displayName = config.displayName;
    this._mailEnabled = config.mailEnabled;
    this._mailNickname = config.mailNickname;
    this._members = config.members;
    this._owners = config.owners;
    this._preventDuplicateNames = config.preventDuplicateNames;
    this._provisioningOptions = config.provisioningOptions;
    this._securityEnabled = config.securityEnabled;
    this._theme = config.theme;
    this._types = config.types;
    this._visibility = config.visibility;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_to_role - computed: false, optional: true, required: false
  private _assignableToRole?: boolean | cdktf.IResolvable;
  public get assignableToRole() {
    return this.getBooleanAttribute('assignable_to_role');
  }
  public set assignableToRole(value: boolean | cdktf.IResolvable ) {
    this._assignableToRole = value;
  }
  public resetAssignableToRole() {
    this._assignableToRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableToRoleInput() {
    return this._assignableToRole
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: string[];
  public get behaviors() {
    return this.getListAttribute('behaviors');
  }
  public set behaviors(value: string[] ) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
  }

  // mail_enabled - computed: false, optional: true, required: false
  private _mailEnabled?: boolean | cdktf.IResolvable;
  public get mailEnabled() {
    return this.getBooleanAttribute('mail_enabled');
  }
  public set mailEnabled(value: boolean | cdktf.IResolvable ) {
    this._mailEnabled = value;
  }
  public resetMailEnabled() {
    this._mailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailEnabledInput() {
    return this._mailEnabled
  }

  // mail_nickname - computed: true, optional: true, required: false
  private _mailNickname?: string;
  public get mailNickname() {
    return this.getStringAttribute('mail_nickname');
  }
  public set mailNickname(value: string) {
    this._mailNickname = value;
  }
  public resetMailNickname() {
    this._mailNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailNicknameInput() {
    return this._mailNickname
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // onpremises_domain_name - computed: true, optional: false, required: false
  public get onpremisesDomainName() {
    return this.getStringAttribute('onpremises_domain_name');
  }

  // onpremises_netbios_name - computed: true, optional: false, required: false
  public get onpremisesNetbiosName() {
    return this.getStringAttribute('onpremises_netbios_name');
  }

  // onpremises_sam_account_name - computed: true, optional: false, required: false
  public get onpremisesSamAccountName() {
    return this.getStringAttribute('onpremises_sam_account_name');
  }

  // onpremises_security_identifier - computed: true, optional: false, required: false
  public get onpremisesSecurityIdentifier() {
    return this.getStringAttribute('onpremises_security_identifier');
  }

  // onpremises_sync_enabled - computed: true, optional: false, required: false
  public get onpremisesSyncEnabled() {
    return this.getBooleanAttribute('onpremises_sync_enabled');
  }

  // owners - computed: true, optional: true, required: false
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
    return this._owners
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // prevent_duplicate_names - computed: false, optional: true, required: false
  private _preventDuplicateNames?: boolean | cdktf.IResolvable;
  public get preventDuplicateNames() {
    return this.getBooleanAttribute('prevent_duplicate_names');
  }
  public set preventDuplicateNames(value: boolean | cdktf.IResolvable ) {
    this._preventDuplicateNames = value;
  }
  public resetPreventDuplicateNames() {
    this._preventDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDuplicateNamesInput() {
    return this._preventDuplicateNames
  }

  // provisioning_options - computed: false, optional: true, required: false
  private _provisioningOptions?: string[];
  public get provisioningOptions() {
    return this.getListAttribute('provisioning_options');
  }
  public set provisioningOptions(value: string[] ) {
    this._provisioningOptions = value;
  }
  public resetProvisioningOptions() {
    this._provisioningOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningOptionsInput() {
    return this._provisioningOptions
  }

  // proxy_addresses - computed: true, optional: false, required: false
  public get proxyAddresses() {
    return this.getListAttribute('proxy_addresses');
  }

  // security_enabled - computed: false, optional: true, required: false
  private _securityEnabled?: boolean | cdktf.IResolvable;
  public get securityEnabled() {
    return this.getBooleanAttribute('security_enabled');
  }
  public set securityEnabled(value: boolean | cdktf.IResolvable ) {
    this._securityEnabled = value;
  }
  public resetSecurityEnabled() {
    this._securityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnabledInput() {
    return this._securityEnabled
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string;
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string ) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[] ) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GroupTimeouts ) {
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
      assignable_to_role: cdktf.booleanToTerraform(this._assignableToRole),
      behaviors: cdktf.listMapper(cdktf.stringToTerraform)(this._behaviors),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      mail_enabled: cdktf.booleanToTerraform(this._mailEnabled),
      mail_nickname: cdktf.stringToTerraform(this._mailNickname),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      prevent_duplicate_names: cdktf.booleanToTerraform(this._preventDuplicateNames),
      provisioning_options: cdktf.listMapper(cdktf.stringToTerraform)(this._provisioningOptions),
      security_enabled: cdktf.booleanToTerraform(this._securityEnabled),
      theme: cdktf.stringToTerraform(this._theme),
      types: cdktf.listMapper(cdktf.stringToTerraform)(this._types),
      visibility: cdktf.stringToTerraform(this._visibility),
      timeouts: groupTimeoutsToTerraform(this._timeouts),
    };
  }
}
