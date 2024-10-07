# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-azuread.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-azuread.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.Group.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.Group(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  administrative_unit_ids: typing.List[str] = None,
  assignable_to_role: typing.Union[bool, IResolvable] = None,
  auto_subscribe_new_members: typing.Union[bool, IResolvable] = None,
  behaviors: typing.List[str] = None,
  description: str = None,
  dynamic_membership: GroupDynamicMembership = None,
  external_senders_allowed: typing.Union[bool, IResolvable] = None,
  hide_from_address_lists: typing.Union[bool, IResolvable] = None,
  hide_from_outlook_clients: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  members: typing.List[str] = None,
  onpremises_group_type: str = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  provisioning_options: typing.List[str] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  theme: str = None,
  timeouts: GroupTimeouts = None,
  types: typing.List[str] = None,
  visibility: str = None,
  writeback_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | A set of members who should be present in this group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.owners">owners</a></code> | <code>typing.List[str]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.theme">theme</a></code> | <code>str</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.types">types</a></code> | <code>typing.List[str]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#display_name Group#display_name}

---

##### `administrative_unit_ids`<sup>Optional</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.administrativeUnitIds"></a>

- *Type:* typing.List[str]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#administrative_unit_ids Group#administrative_unit_ids}

---

##### `assignable_to_role`<sup>Optional</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.assignableToRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#assignable_to_role Group#assignable_to_role}

---

##### `auto_subscribe_new_members`<sup>Optional</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.autoSubscribeNewMembers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#auto_subscribe_new_members Group#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.behaviors"></a>

- *Type:* typing.List[str]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#behaviors Group#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.description"></a>

- *Type:* str

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#description Group#description}

---

##### `dynamic_membership`<sup>Optional</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.dynamicMembership"></a>

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#dynamic_membership Group#dynamic_membership}

---

##### `external_senders_allowed`<sup>Optional</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.externalSendersAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#external_senders_allowed Group#external_senders_allowed}

---

##### `hide_from_address_lists`<sup>Optional</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.hideFromAddressLists"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#hide_from_address_lists Group#hide_from_address_lists}

---

##### `hide_from_outlook_clients`<sup>Optional</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.hideFromOutlookClients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#hide_from_outlook_clients Group#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.mailEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#mail_enabled Group#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.mailNickname"></a>

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#mail_nickname Group#mail_nickname}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

A set of members who should be present in this group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#members Group#members}

---

##### `onpremises_group_type`<sup>Optional</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.onpremisesGroupType"></a>

- *Type:* str

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#onpremises_group_type Group#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.owners"></a>

- *Type:* typing.List[str]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#owners Group#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#prevent_duplicate_names Group#prevent_duplicate_names}

---

##### `provisioning_options`<sup>Optional</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.provisioningOptions"></a>

- *Type:* typing.List[str]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#provisioning_options Group#provisioning_options}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.securityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#security_enabled Group#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.theme"></a>

- *Type:* str

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#theme Group#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#timeouts Group#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.types"></a>

- *Type:* typing.List[str]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#types Group#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.visibility"></a>

- *Type:* str

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#visibility Group#visibility}

---

##### `writeback_enabled`<sup>Optional</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.writebackEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#writeback_enabled Group#writeback_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.group.Group.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.group.Group.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.group.Group.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.group.Group.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.group.Group.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.group.Group.putDynamicMembership">put_dynamic_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetAdministrativeUnitIds">reset_administrative_unit_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetAssignableToRole">reset_assignable_to_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetAutoSubscribeNewMembers">reset_auto_subscribe_new_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetBehaviors">reset_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetDynamicMembership">reset_dynamic_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetExternalSendersAllowed">reset_external_senders_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetHideFromAddressLists">reset_hide_from_address_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetHideFromOutlookClients">reset_hide_from_outlook_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMailEnabled">reset_mail_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMailNickname">reset_mail_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetOnpremisesGroupType">reset_onpremises_group_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetOwners">reset_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetPreventDuplicateNames">reset_prevent_duplicate_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetProvisioningOptions">reset_provisioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetSecurityEnabled">reset_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetWritebackEnabled">reset_writeback_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.group.Group.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.group.Group.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.group.Group.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.group.Group.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.group.Group.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.group.Group.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.group.Group.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.group.Group.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.group.Group.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.group.Group.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.group.Group.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.group.Group.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.group.Group.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.group.Group.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.group.Group.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.group.Group.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.group.Group.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.group.Group.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.group.Group.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.group.Group.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.group.Group.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.group.Group.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.group.Group.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.group.Group.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.group.Group.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.group.Group.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.group.Group.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dynamic_membership` <a name="put_dynamic_membership" id="@cdktf/provider-azuread.group.Group.putDynamicMembership"></a>

```python
def put_dynamic_membership(
  enabled: typing.Union[bool, IResolvable],
  rule: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.group.Group.putDynamicMembership.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#enabled Group#enabled}.

---

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.group.Group.putDynamicMembership.parameter.rule"></a>

- *Type:* str

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#rule Group#rule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.group.Group.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.group.Group.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#create Group#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.group.Group.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#delete Group#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.group.Group.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#read Group#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.group.Group.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#update Group#update}.

---

##### `reset_administrative_unit_ids` <a name="reset_administrative_unit_ids" id="@cdktf/provider-azuread.group.Group.resetAdministrativeUnitIds"></a>

```python
def reset_administrative_unit_ids() -> None
```

##### `reset_assignable_to_role` <a name="reset_assignable_to_role" id="@cdktf/provider-azuread.group.Group.resetAssignableToRole"></a>

```python
def reset_assignable_to_role() -> None
```

##### `reset_auto_subscribe_new_members` <a name="reset_auto_subscribe_new_members" id="@cdktf/provider-azuread.group.Group.resetAutoSubscribeNewMembers"></a>

```python
def reset_auto_subscribe_new_members() -> None
```

##### `reset_behaviors` <a name="reset_behaviors" id="@cdktf/provider-azuread.group.Group.resetBehaviors"></a>

```python
def reset_behaviors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.group.Group.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic_membership` <a name="reset_dynamic_membership" id="@cdktf/provider-azuread.group.Group.resetDynamicMembership"></a>

```python
def reset_dynamic_membership() -> None
```

##### `reset_external_senders_allowed` <a name="reset_external_senders_allowed" id="@cdktf/provider-azuread.group.Group.resetExternalSendersAllowed"></a>

```python
def reset_external_senders_allowed() -> None
```

##### `reset_hide_from_address_lists` <a name="reset_hide_from_address_lists" id="@cdktf/provider-azuread.group.Group.resetHideFromAddressLists"></a>

```python
def reset_hide_from_address_lists() -> None
```

##### `reset_hide_from_outlook_clients` <a name="reset_hide_from_outlook_clients" id="@cdktf/provider-azuread.group.Group.resetHideFromOutlookClients"></a>

```python
def reset_hide_from_outlook_clients() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.group.Group.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mail_enabled` <a name="reset_mail_enabled" id="@cdktf/provider-azuread.group.Group.resetMailEnabled"></a>

```python
def reset_mail_enabled() -> None
```

##### `reset_mail_nickname` <a name="reset_mail_nickname" id="@cdktf/provider-azuread.group.Group.resetMailNickname"></a>

```python
def reset_mail_nickname() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-azuread.group.Group.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_onpremises_group_type` <a name="reset_onpremises_group_type" id="@cdktf/provider-azuread.group.Group.resetOnpremisesGroupType"></a>

```python
def reset_onpremises_group_type() -> None
```

##### `reset_owners` <a name="reset_owners" id="@cdktf/provider-azuread.group.Group.resetOwners"></a>

```python
def reset_owners() -> None
```

##### `reset_prevent_duplicate_names` <a name="reset_prevent_duplicate_names" id="@cdktf/provider-azuread.group.Group.resetPreventDuplicateNames"></a>

```python
def reset_prevent_duplicate_names() -> None
```

##### `reset_provisioning_options` <a name="reset_provisioning_options" id="@cdktf/provider-azuread.group.Group.resetProvisioningOptions"></a>

```python
def reset_provisioning_options() -> None
```

##### `reset_security_enabled` <a name="reset_security_enabled" id="@cdktf/provider-azuread.group.Group.resetSecurityEnabled"></a>

```python
def reset_security_enabled() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktf/provider-azuread.group.Group.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.group.Group.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktf/provider-azuread.group.Group.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-azuread.group.Group.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_writeback_enabled` <a name="reset_writeback_enabled" id="@cdktf/provider-azuread.group.Group.resetWritebackEnabled"></a>

```python
def reset_writeback_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.group.Group.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.Group.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.group.Group.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.group.Group.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.Group.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.group.Group.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.Group.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.group.Group.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.Group.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Group to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mail">mail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesDomainName">onpremises_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesNetbiosName">onpremises_netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSamAccountName">onpremises_sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSecurityIdentifier">onpremises_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSyncEnabled">onpremises_sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.proxyAddresses">proxy_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.administrativeUnitIdsInput">administrative_unit_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.assignableToRoleInput">assignable_to_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembersInput">auto_subscribe_new_members_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.behaviorsInput">behaviors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dynamicMembershipInput">dynamic_membership_input</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.externalSendersAllowedInput">external_senders_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromAddressListsInput">hide_from_address_lists_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromOutlookClientsInput">hide_from_outlook_clients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailEnabledInput">mail_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailNicknameInput">mail_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesGroupTypeInput">onpremises_group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.ownersInput">owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preventDuplicateNamesInput">prevent_duplicate_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioningOptionsInput">provisioning_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.securityEnabledInput">security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.writebackEnabledInput">writeback_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailNickname">mail_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.group.Group.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.group.Group.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.group.Group.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.group.Group.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.group.Group.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.group.Group.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.group.Group.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.group.Group.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.group.Group.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.group.Group.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.group.Group.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.group.Group.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.group.Group.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.group.Group.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dynamic_membership`<sup>Required</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.group.Group.property.dynamicMembership"></a>

```python
dynamic_membership: GroupDynamicMembershipOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a>

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.group.Group.property.mail"></a>

```python
mail: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.group.Group.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `onpremises_domain_name`<sup>Required</sup> <a name="onpremises_domain_name" id="@cdktf/provider-azuread.group.Group.property.onpremisesDomainName"></a>

```python
onpremises_domain_name: str
```

- *Type:* str

---

##### `onpremises_netbios_name`<sup>Required</sup> <a name="onpremises_netbios_name" id="@cdktf/provider-azuread.group.Group.property.onpremisesNetbiosName"></a>

```python
onpremises_netbios_name: str
```

- *Type:* str

---

##### `onpremises_sam_account_name`<sup>Required</sup> <a name="onpremises_sam_account_name" id="@cdktf/provider-azuread.group.Group.property.onpremisesSamAccountName"></a>

```python
onpremises_sam_account_name: str
```

- *Type:* str

---

##### `onpremises_security_identifier`<sup>Required</sup> <a name="onpremises_security_identifier" id="@cdktf/provider-azuread.group.Group.property.onpremisesSecurityIdentifier"></a>

```python
onpremises_security_identifier: str
```

- *Type:* str

---

##### `onpremises_sync_enabled`<sup>Required</sup> <a name="onpremises_sync_enabled" id="@cdktf/provider-azuread.group.Group.property.onpremisesSyncEnabled"></a>

```python
onpremises_sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-azuread.group.Group.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `proxy_addresses`<sup>Required</sup> <a name="proxy_addresses" id="@cdktf/provider-azuread.group.Group.property.proxyAddresses"></a>

```python
proxy_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.group.Group.property.timeouts"></a>

```python
timeouts: GroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `administrative_unit_ids_input`<sup>Optional</sup> <a name="administrative_unit_ids_input" id="@cdktf/provider-azuread.group.Group.property.administrativeUnitIdsInput"></a>

```python
administrative_unit_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assignable_to_role_input`<sup>Optional</sup> <a name="assignable_to_role_input" id="@cdktf/provider-azuread.group.Group.property.assignableToRoleInput"></a>

```python
assignable_to_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_subscribe_new_members_input`<sup>Optional</sup> <a name="auto_subscribe_new_members_input" id="@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembersInput"></a>

```python
auto_subscribe_new_members_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `behaviors_input`<sup>Optional</sup> <a name="behaviors_input" id="@cdktf/provider-azuread.group.Group.property.behaviorsInput"></a>

```python
behaviors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.group.Group.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.group.Group.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dynamic_membership_input`<sup>Optional</sup> <a name="dynamic_membership_input" id="@cdktf/provider-azuread.group.Group.property.dynamicMembershipInput"></a>

```python
dynamic_membership_input: GroupDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---

##### `external_senders_allowed_input`<sup>Optional</sup> <a name="external_senders_allowed_input" id="@cdktf/provider-azuread.group.Group.property.externalSendersAllowedInput"></a>

```python
external_senders_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_address_lists_input`<sup>Optional</sup> <a name="hide_from_address_lists_input" id="@cdktf/provider-azuread.group.Group.property.hideFromAddressListsInput"></a>

```python
hide_from_address_lists_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_outlook_clients_input`<sup>Optional</sup> <a name="hide_from_outlook_clients_input" id="@cdktf/provider-azuread.group.Group.property.hideFromOutlookClientsInput"></a>

```python
hide_from_outlook_clients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.group.Group.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mail_enabled_input`<sup>Optional</sup> <a name="mail_enabled_input" id="@cdktf/provider-azuread.group.Group.property.mailEnabledInput"></a>

```python
mail_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname_input`<sup>Optional</sup> <a name="mail_nickname_input" id="@cdktf/provider-azuread.group.Group.property.mailNicknameInput"></a>

```python
mail_nickname_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-azuread.group.Group.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `onpremises_group_type_input`<sup>Optional</sup> <a name="onpremises_group_type_input" id="@cdktf/provider-azuread.group.Group.property.onpremisesGroupTypeInput"></a>

```python
onpremises_group_type_input: str
```

- *Type:* str

---

##### `owners_input`<sup>Optional</sup> <a name="owners_input" id="@cdktf/provider-azuread.group.Group.property.ownersInput"></a>

```python
owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names_input`<sup>Optional</sup> <a name="prevent_duplicate_names_input" id="@cdktf/provider-azuread.group.Group.property.preventDuplicateNamesInput"></a>

```python
prevent_duplicate_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_options_input`<sup>Optional</sup> <a name="provisioning_options_input" id="@cdktf/provider-azuread.group.Group.property.provisioningOptionsInput"></a>

```python
provisioning_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_enabled_input`<sup>Optional</sup> <a name="security_enabled_input" id="@cdktf/provider-azuread.group.Group.property.securityEnabledInput"></a>

```python
security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktf/provider-azuread.group.Group.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.group.Group.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>]

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktf/provider-azuread.group.Group.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azuread.group.Group.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `writeback_enabled_input`<sup>Optional</sup> <a name="writeback_enabled_input" id="@cdktf/provider-azuread.group.Group.property.writebackEnabledInput"></a>

```python
writeback_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `administrative_unit_ids`<sup>Required</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.group.Group.property.administrativeUnitIds"></a>

```python
administrative_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assignable_to_role`<sup>Required</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.group.Group.property.assignableToRole"></a>

```python
assignable_to_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_subscribe_new_members`<sup>Required</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembers"></a>

```python
auto_subscribe_new_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.group.Group.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.group.Group.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.group.Group.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_senders_allowed`<sup>Required</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.group.Group.property.externalSendersAllowed"></a>

```python
external_senders_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_address_lists`<sup>Required</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.group.Group.property.hideFromAddressLists"></a>

```python
hide_from_address_lists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_outlook_clients`<sup>Required</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.group.Group.property.hideFromOutlookClients"></a>

```python
hide_from_outlook_clients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.group.Group.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mail_enabled`<sup>Required</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.group.Group.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname`<sup>Required</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.group.Group.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.group.Group.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `onpremises_group_type`<sup>Required</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.group.Group.property.onpremisesGroupType"></a>

```python
onpremises_group_type: str
```

- *Type:* str

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.group.Group.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names`<sup>Required</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.group.Group.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_options`<sup>Required</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.group.Group.property.provisioningOptions"></a>

```python
provisioning_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_enabled`<sup>Required</sup> <a name="security_enabled" id="@cdktf/provider-azuread.group.Group.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.group.Group.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.group.Group.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.group.Group.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `writeback_enabled`<sup>Required</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.group.Group.property.writebackEnabled"></a>

```python
writeback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.group.Group.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-azuread.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.GroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  administrative_unit_ids: typing.List[str] = None,
  assignable_to_role: typing.Union[bool, IResolvable] = None,
  auto_subscribe_new_members: typing.Union[bool, IResolvable] = None,
  behaviors: typing.List[str] = None,
  description: str = None,
  dynamic_membership: GroupDynamicMembership = None,
  external_senders_allowed: typing.Union[bool, IResolvable] = None,
  hide_from_address_lists: typing.Union[bool, IResolvable] = None,
  hide_from_outlook_clients: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  members: typing.List[str] = None,
  onpremises_group_type: str = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  provisioning_options: typing.List[str] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  theme: str = None,
  timeouts: GroupTimeouts = None,
  types: typing.List[str] = None,
  visibility: str = None,
  writeback_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.description">description</a></code> | <code>str</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.members">members</a></code> | <code>typing.List[str]</code> | A set of members who should be present in this group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.owners">owners</a></code> | <code>typing.List[str]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.theme">theme</a></code> | <code>str</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.types">types</a></code> | <code>typing.List[str]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.visibility">visibility</a></code> | <code>str</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.group.GroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.group.GroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.group.GroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.group.GroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.group.GroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.group.GroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.group.GroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.group.GroupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#display_name Group#display_name}

---

##### `administrative_unit_ids`<sup>Optional</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.group.GroupConfig.property.administrativeUnitIds"></a>

```python
administrative_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#administrative_unit_ids Group#administrative_unit_ids}

---

##### `assignable_to_role`<sup>Optional</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.group.GroupConfig.property.assignableToRole"></a>

```python
assignable_to_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#assignable_to_role Group#assignable_to_role}

---

##### `auto_subscribe_new_members`<sup>Optional</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers"></a>

```python
auto_subscribe_new_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#auto_subscribe_new_members Group#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.group.GroupConfig.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#behaviors Group#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.group.GroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#description Group#description}

---

##### `dynamic_membership`<sup>Optional</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.group.GroupConfig.property.dynamicMembership"></a>

```python
dynamic_membership: GroupDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#dynamic_membership Group#dynamic_membership}

---

##### `external_senders_allowed`<sup>Optional</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.group.GroupConfig.property.externalSendersAllowed"></a>

```python
external_senders_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#external_senders_allowed Group#external_senders_allowed}

---

##### `hide_from_address_lists`<sup>Optional</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.group.GroupConfig.property.hideFromAddressLists"></a>

```python
hide_from_address_lists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#hide_from_address_lists Group#hide_from_address_lists}

---

##### `hide_from_outlook_clients`<sup>Optional</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.group.GroupConfig.property.hideFromOutlookClients"></a>

```python
hide_from_outlook_clients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#hide_from_outlook_clients Group#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.group.GroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.group.GroupConfig.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#mail_enabled Group#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.group.GroupConfig.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#mail_nickname Group#mail_nickname}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-azuread.group.GroupConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

A set of members who should be present in this group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#members Group#members}

---

##### `onpremises_group_type`<sup>Optional</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.group.GroupConfig.property.onpremisesGroupType"></a>

```python
onpremises_group_type: str
```

- *Type:* str

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#onpremises_group_type Group#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.group.GroupConfig.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#owners Group#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.group.GroupConfig.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#prevent_duplicate_names Group#prevent_duplicate_names}

---

##### `provisioning_options`<sup>Optional</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.group.GroupConfig.property.provisioningOptions"></a>

```python
provisioning_options: typing.List[str]
```

- *Type:* typing.List[str]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#provisioning_options Group#provisioning_options}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.group.GroupConfig.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#security_enabled Group#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.group.GroupConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#theme Group#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.group.GroupConfig.property.timeouts"></a>

```python
timeouts: GroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#timeouts Group#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.group.GroupConfig.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#types Group#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.group.GroupConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#visibility Group#visibility}

---

##### `writeback_enabled`<sup>Optional</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.group.GroupConfig.property.writebackEnabled"></a>

```python
writeback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#writeback_enabled Group#writeback_enabled}

---

### GroupDynamicMembership <a name="GroupDynamicMembership" id="@cdktf/provider-azuread.group.GroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupDynamicMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.GroupDynamicMembership(
  enabled: typing.Union[bool, IResolvable],
  rule: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#enabled Group#enabled}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership.property.rule">rule</a></code> | <code>str</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.group.GroupDynamicMembership.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#enabled Group#enabled}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.group.GroupDynamicMembership.property.rule"></a>

```python
rule: str
```

- *Type:* str

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#rule Group#rule}

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktf/provider-azuread.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.GroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#create Group#create}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#delete Group#delete}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#read Group#read}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#update Group#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.group.GroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#create Group#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.group.GroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#delete Group#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.group.GroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#read Group#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.group.GroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.0.2/docs/resources/group#update Group#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDynamicMembershipOutputReference <a name="GroupDynamicMembershipOutputReference" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.GroupDynamicMembershipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue"></a>

```python
internal_value: GroupDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---


### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group

group.GroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>]

---



