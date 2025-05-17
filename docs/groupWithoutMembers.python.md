# `groupWithoutMembers` Submodule <a name="`groupWithoutMembers` Submodule" id="@cdktf/provider-azuread.groupWithoutMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupWithoutMembers <a name="GroupWithoutMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members azuread_group_without_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembers(
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
  dynamic_membership: GroupWithoutMembersDynamicMembership = None,
  external_senders_allowed: typing.Union[bool, IResolvable] = None,
  hide_from_address_lists: typing.Union[bool, IResolvable] = None,
  hide_from_outlook_clients: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  onpremises_group_type: str = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  provisioning_options: typing.List[str] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  theme: str = None,
  timeouts: GroupWithoutMembersTimeouts = None,
  types: typing.List[str] = None,
  visibility: str = None,
  writeback_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.owners">owners</a></code> | <code>typing.List[str]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.theme">theme</a></code> | <code>str</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.types">types</a></code> | <code>typing.List[str]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `administrative_unit_ids`<sup>Optional</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.administrativeUnitIds"></a>

- *Type:* typing.List[str]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `assignable_to_role`<sup>Optional</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.assignableToRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `auto_subscribe_new_members`<sup>Optional</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.autoSubscribeNewMembers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.behaviors"></a>

- *Type:* typing.List[str]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.description"></a>

- *Type:* str

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `dynamic_membership`<sup>Optional</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dynamicMembership"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `external_senders_allowed`<sup>Optional</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.externalSendersAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `hide_from_address_lists`<sup>Optional</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromAddressLists"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `hide_from_outlook_clients`<sup>Optional</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromOutlookClients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailNickname"></a>

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `onpremises_group_type`<sup>Optional</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.onpremisesGroupType"></a>

- *Type:* str

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.owners"></a>

- *Type:* typing.List[str]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `provisioning_options`<sup>Optional</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioningOptions"></a>

- *Type:* typing.List[str]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.securityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.theme"></a>

- *Type:* str

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.types"></a>

- *Type:* typing.List[str]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.visibility"></a>

- *Type:* str

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `writeback_enabled`<sup>Optional</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.writebackEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership">put_dynamic_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds">reset_administrative_unit_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole">reset_assignable_to_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers">reset_auto_subscribe_new_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors">reset_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership">reset_dynamic_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed">reset_external_senders_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists">reset_hide_from_address_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients">reset_hide_from_outlook_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled">reset_mail_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname">reset_mail_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType">reset_onpremises_group_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners">reset_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames">reset_prevent_duplicate_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions">reset_provisioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled">reset_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes">reset_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled">reset_writeback_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dynamic_membership` <a name="put_dynamic_membership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership"></a>

```python
def put_dynamic_membership(
  enabled: typing.Union[bool, IResolvable],
  rule: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.rule"></a>

- *Type:* str

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

##### `reset_administrative_unit_ids` <a name="reset_administrative_unit_ids" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds"></a>

```python
def reset_administrative_unit_ids() -> None
```

##### `reset_assignable_to_role` <a name="reset_assignable_to_role" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole"></a>

```python
def reset_assignable_to_role() -> None
```

##### `reset_auto_subscribe_new_members` <a name="reset_auto_subscribe_new_members" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers"></a>

```python
def reset_auto_subscribe_new_members() -> None
```

##### `reset_behaviors` <a name="reset_behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors"></a>

```python
def reset_behaviors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic_membership` <a name="reset_dynamic_membership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership"></a>

```python
def reset_dynamic_membership() -> None
```

##### `reset_external_senders_allowed` <a name="reset_external_senders_allowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed"></a>

```python
def reset_external_senders_allowed() -> None
```

##### `reset_hide_from_address_lists` <a name="reset_hide_from_address_lists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists"></a>

```python
def reset_hide_from_address_lists() -> None
```

##### `reset_hide_from_outlook_clients` <a name="reset_hide_from_outlook_clients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients"></a>

```python
def reset_hide_from_outlook_clients() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mail_enabled` <a name="reset_mail_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled"></a>

```python
def reset_mail_enabled() -> None
```

##### `reset_mail_nickname` <a name="reset_mail_nickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname"></a>

```python
def reset_mail_nickname() -> None
```

##### `reset_onpremises_group_type` <a name="reset_onpremises_group_type" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType"></a>

```python
def reset_onpremises_group_type() -> None
```

##### `reset_owners` <a name="reset_owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners"></a>

```python
def reset_owners() -> None
```

##### `reset_prevent_duplicate_names` <a name="reset_prevent_duplicate_names" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames"></a>

```python
def reset_prevent_duplicate_names() -> None
```

##### `reset_provisioning_options` <a name="reset_provisioning_options" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions"></a>

```python
def reset_provisioning_options() -> None
```

##### `reset_security_enabled` <a name="reset_security_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled"></a>

```python
def reset_security_enabled() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_types` <a name="reset_types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes"></a>

```python
def reset_types() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_writeback_enabled` <a name="reset_writeback_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled"></a>

```python
def reset_writeback_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembers.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupWithoutMembers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupWithoutMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupWithoutMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail">mail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName">onpremises_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName">onpremises_netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName">onpremises_sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier">onpremises_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled">onpremises_sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses">proxy_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput">administrative_unit_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput">assignable_to_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput">auto_subscribe_new_members_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput">behaviors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput">dynamic_membership_input</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput">external_senders_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput">hide_from_address_lists_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput">hide_from_outlook_clients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput">mail_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput">mail_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput">onpremises_group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput">owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput">prevent_duplicate_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput">provisioning_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput">security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput">writeback_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname">mail_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners">owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dynamic_membership`<sup>Required</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership"></a>

```python
dynamic_membership: GroupWithoutMembersDynamicMembershipOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a>

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail"></a>

```python
mail: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `onpremises_domain_name`<sup>Required</sup> <a name="onpremises_domain_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName"></a>

```python
onpremises_domain_name: str
```

- *Type:* str

---

##### `onpremises_netbios_name`<sup>Required</sup> <a name="onpremises_netbios_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName"></a>

```python
onpremises_netbios_name: str
```

- *Type:* str

---

##### `onpremises_sam_account_name`<sup>Required</sup> <a name="onpremises_sam_account_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName"></a>

```python
onpremises_sam_account_name: str
```

- *Type:* str

---

##### `onpremises_security_identifier`<sup>Required</sup> <a name="onpremises_security_identifier" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier"></a>

```python
onpremises_security_identifier: str
```

- *Type:* str

---

##### `onpremises_sync_enabled`<sup>Required</sup> <a name="onpremises_sync_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled"></a>

```python
onpremises_sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `proxy_addresses`<sup>Required</sup> <a name="proxy_addresses" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses"></a>

```python
proxy_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts"></a>

```python
timeouts: GroupWithoutMembersTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a>

---

##### `administrative_unit_ids_input`<sup>Optional</sup> <a name="administrative_unit_ids_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput"></a>

```python
administrative_unit_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assignable_to_role_input`<sup>Optional</sup> <a name="assignable_to_role_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput"></a>

```python
assignable_to_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_subscribe_new_members_input`<sup>Optional</sup> <a name="auto_subscribe_new_members_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput"></a>

```python
auto_subscribe_new_members_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `behaviors_input`<sup>Optional</sup> <a name="behaviors_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput"></a>

```python
behaviors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dynamic_membership_input`<sup>Optional</sup> <a name="dynamic_membership_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput"></a>

```python
dynamic_membership_input: GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `external_senders_allowed_input`<sup>Optional</sup> <a name="external_senders_allowed_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput"></a>

```python
external_senders_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_address_lists_input`<sup>Optional</sup> <a name="hide_from_address_lists_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput"></a>

```python
hide_from_address_lists_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_outlook_clients_input`<sup>Optional</sup> <a name="hide_from_outlook_clients_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput"></a>

```python
hide_from_outlook_clients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mail_enabled_input`<sup>Optional</sup> <a name="mail_enabled_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput"></a>

```python
mail_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname_input`<sup>Optional</sup> <a name="mail_nickname_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput"></a>

```python
mail_nickname_input: str
```

- *Type:* str

---

##### `onpremises_group_type_input`<sup>Optional</sup> <a name="onpremises_group_type_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput"></a>

```python
onpremises_group_type_input: str
```

- *Type:* str

---

##### `owners_input`<sup>Optional</sup> <a name="owners_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput"></a>

```python
owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names_input`<sup>Optional</sup> <a name="prevent_duplicate_names_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput"></a>

```python
prevent_duplicate_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_options_input`<sup>Optional</sup> <a name="provisioning_options_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput"></a>

```python
provisioning_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_enabled_input`<sup>Optional</sup> <a name="security_enabled_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput"></a>

```python
security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupWithoutMembersTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>]

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `writeback_enabled_input`<sup>Optional</sup> <a name="writeback_enabled_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput"></a>

```python
writeback_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `administrative_unit_ids`<sup>Required</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds"></a>

```python
administrative_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assignable_to_role`<sup>Required</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole"></a>

```python
assignable_to_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_subscribe_new_members`<sup>Required</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers"></a>

```python
auto_subscribe_new_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_senders_allowed`<sup>Required</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed"></a>

```python
external_senders_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_address_lists`<sup>Required</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists"></a>

```python
hide_from_address_lists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_from_outlook_clients`<sup>Required</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients"></a>

```python
hide_from_outlook_clients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mail_enabled`<sup>Required</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mail_nickname`<sup>Required</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

---

##### `onpremises_group_type`<sup>Required</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType"></a>

```python
onpremises_group_type: str
```

- *Type:* str

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prevent_duplicate_names`<sup>Required</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provisioning_options`<sup>Required</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions"></a>

```python
provisioning_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_enabled`<sup>Required</sup> <a name="security_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `writeback_enabled`<sup>Required</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled"></a>

```python
writeback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupWithoutMembersConfig <a name="GroupWithoutMembersConfig" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembersConfig(
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
  dynamic_membership: GroupWithoutMembersDynamicMembership = None,
  external_senders_allowed: typing.Union[bool, IResolvable] = None,
  hide_from_address_lists: typing.Union[bool, IResolvable] = None,
  hide_from_outlook_clients: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mail_enabled: typing.Union[bool, IResolvable] = None,
  mail_nickname: str = None,
  onpremises_group_type: str = None,
  owners: typing.List[str] = None,
  prevent_duplicate_names: typing.Union[bool, IResolvable] = None,
  provisioning_options: typing.List[str] = None,
  security_enabled: typing.Union[bool, IResolvable] = None,
  theme: str = None,
  timeouts: GroupWithoutMembersTimeouts = None,
  types: typing.List[str] = None,
  visibility: str = None,
  writeback_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds">administrative_unit_ids</a></code> | <code>typing.List[str]</code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole">assignable_to_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers">auto_subscribe_new_members</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors">behaviors</a></code> | <code>typing.List[str]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description">description</a></code> | <code>str</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership">dynamic_membership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed">external_senders_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists">hide_from_address_lists</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients">hide_from_outlook_clients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled">mail_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname">mail_nickname</a></code> | <code>str</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType">onpremises_group_type</a></code> | <code>str</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners">owners</a></code> | <code>typing.List[str]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames">prevent_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions">provisioning_options</a></code> | <code>typing.List[str]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled">security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme">theme</a></code> | <code>str</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types">types</a></code> | <code>typing.List[str]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility">visibility</a></code> | <code>str</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled">writeback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `administrative_unit_ids`<sup>Optional</sup> <a name="administrative_unit_ids" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds"></a>

```python
administrative_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `assignable_to_role`<sup>Optional</sup> <a name="assignable_to_role" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole"></a>

```python
assignable_to_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `auto_subscribe_new_members`<sup>Optional</sup> <a name="auto_subscribe_new_members" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers"></a>

```python
auto_subscribe_new_members: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors"></a>

```python
behaviors: typing.List[str]
```

- *Type:* typing.List[str]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `dynamic_membership`<sup>Optional</sup> <a name="dynamic_membership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership"></a>

```python
dynamic_membership: GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `external_senders_allowed`<sup>Optional</sup> <a name="external_senders_allowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed"></a>

```python
external_senders_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `hide_from_address_lists`<sup>Optional</sup> <a name="hide_from_address_lists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists"></a>

```python
hide_from_address_lists: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `hide_from_outlook_clients`<sup>Optional</sup> <a name="hide_from_outlook_clients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients"></a>

```python
hide_from_outlook_clients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail_enabled`<sup>Optional</sup> <a name="mail_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled"></a>

```python
mail_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `mail_nickname`<sup>Optional</sup> <a name="mail_nickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname"></a>

```python
mail_nickname: str
```

- *Type:* str

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `onpremises_group_type`<sup>Optional</sup> <a name="onpremises_group_type" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType"></a>

```python
onpremises_group_type: str
```

- *Type:* str

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners"></a>

```python
owners: typing.List[str]
```

- *Type:* typing.List[str]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `prevent_duplicate_names`<sup>Optional</sup> <a name="prevent_duplicate_names" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames"></a>

```python
prevent_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `provisioning_options`<sup>Optional</sup> <a name="provisioning_options" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions"></a>

```python
provisioning_options: typing.List[str]
```

- *Type:* typing.List[str]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `security_enabled`<sup>Optional</sup> <a name="security_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled"></a>

```python
security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts"></a>

```python
timeouts: GroupWithoutMembersTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `writeback_enabled`<sup>Optional</sup> <a name="writeback_enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled"></a>

```python
writeback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

### GroupWithoutMembersDynamicMembership <a name="GroupWithoutMembersDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembersDynamicMembership(
  enabled: typing.Union[bool, IResolvable],
  rule: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule">rule</a></code> | <code>str</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule"></a>

```python
rule: str
```

- *Type:* str

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

### GroupWithoutMembersTimeouts <a name="GroupWithoutMembersTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembersTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#create GroupWithoutMembers#create}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#read GroupWithoutMembers#read}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#update GroupWithoutMembers#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupWithoutMembersDynamicMembershipOutputReference <a name="GroupWithoutMembersDynamicMembershipOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue"></a>

```python
internal_value: GroupWithoutMembersDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---


### GroupWithoutMembersTimeoutsOutputReference <a name="GroupWithoutMembersTimeoutsOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import group_without_members

groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupWithoutMembersTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>]

---



