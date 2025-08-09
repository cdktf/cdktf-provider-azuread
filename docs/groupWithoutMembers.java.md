# `groupWithoutMembers` Submodule <a name="`groupWithoutMembers` Submodule" id="@cdktf/provider-azuread.groupWithoutMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupWithoutMembers <a name="GroupWithoutMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members azuread_group_without_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembers;

GroupWithoutMembers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .administrativeUnitIds(java.util.List<java.lang.String>)
//  .assignableToRole(java.lang.Boolean)
//  .assignableToRole(IResolvable)
//  .autoSubscribeNewMembers(java.lang.Boolean)
//  .autoSubscribeNewMembers(IResolvable)
//  .behaviors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .dynamicMembership(GroupWithoutMembersDynamicMembership)
//  .externalSendersAllowed(java.lang.Boolean)
//  .externalSendersAllowed(IResolvable)
//  .hideFromAddressLists(java.lang.Boolean)
//  .hideFromAddressLists(IResolvable)
//  .hideFromOutlookClients(java.lang.Boolean)
//  .hideFromOutlookClients(IResolvable)
//  .id(java.lang.String)
//  .mailEnabled(java.lang.Boolean)
//  .mailEnabled(IResolvable)
//  .mailNickname(java.lang.String)
//  .onpremisesGroupType(java.lang.String)
//  .owners(java.util.List<java.lang.String>)
//  .preventDuplicateNames(java.lang.Boolean)
//  .preventDuplicateNames(IResolvable)
//  .provisioningOptions(java.util.List<java.lang.String>)
//  .securityEnabled(java.lang.Boolean)
//  .securityEnabled(IResolvable)
//  .theme(java.lang.String)
//  .timeouts(GroupWithoutMembersTimeouts)
//  .types(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
//  .writebackEnabled(java.lang.Boolean)
//  .writebackEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.administrativeUnitIds">administrativeUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.assignableToRole">assignableToRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.externalSendersAllowed">externalSendersAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromAddressLists">hideFromAddressLists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.onpremisesGroupType">onpremisesGroupType</a></code> | <code>java.lang.String</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioningOptions">provisioningOptions</a></code> | <code>java.util.List<java.lang.String></code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.theme">theme</a></code> | <code>java.lang.String</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.types">types</a></code> | <code>java.util.List<java.lang.String></code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.writebackEnabled">writebackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `administrativeUnitIds`<sup>Optional</sup> <a name="administrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.administrativeUnitIds"></a>

- *Type:* java.util.List<java.lang.String>

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `assignableToRole`<sup>Optional</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.assignableToRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `autoSubscribeNewMembers`<sup>Optional</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.autoSubscribeNewMembers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.behaviors"></a>

- *Type:* java.util.List<java.lang.String>

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `dynamicMembership`<sup>Optional</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.dynamicMembership"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `externalSendersAllowed`<sup>Optional</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.externalSendersAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `hideFromAddressLists`<sup>Optional</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromAddressLists"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `hideFromOutlookClients`<sup>Optional</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.hideFromOutlookClients"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.mailNickname"></a>

- *Type:* java.lang.String

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `onpremisesGroupType`<sup>Optional</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.onpremisesGroupType"></a>

- *Type:* java.lang.String

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.owners"></a>

- *Type:* java.util.List<java.lang.String>

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.preventDuplicateNames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `provisioningOptions`<sup>Optional</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.provisioningOptions"></a>

- *Type:* java.util.List<java.lang.String>

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.securityEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.theme"></a>

- *Type:* java.lang.String

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.types"></a>

- *Type:* java.util.List<java.lang.String>

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `writebackEnabled`<sup>Optional</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.Initializer.parameter.writebackEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership">putDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds">resetAdministrativeUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole">resetAssignableToRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers">resetAutoSubscribeNewMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership">resetDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed">resetExternalSendersAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists">resetHideFromAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients">resetHideFromOutlookClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled">resetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType">resetOnpremisesGroupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners">resetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames">resetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions">resetProvisioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled">resetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled">resetWritebackEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicMembership` <a name="putDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership"></a>

```java
public void putDynamicMembership(GroupWithoutMembersDynamicMembership value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts"></a>

```java
public void putTimeouts(GroupWithoutMembersTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `resetAdministrativeUnitIds` <a name="resetAdministrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAdministrativeUnitIds"></a>

```java
public void resetAdministrativeUnitIds()
```

##### `resetAssignableToRole` <a name="resetAssignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAssignableToRole"></a>

```java
public void resetAssignableToRole()
```

##### `resetAutoSubscribeNewMembers` <a name="resetAutoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetAutoSubscribeNewMembers"></a>

```java
public void resetAutoSubscribeNewMembers()
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetBehaviors"></a>

```java
public void resetBehaviors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamicMembership` <a name="resetDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetDynamicMembership"></a>

```java
public void resetDynamicMembership()
```

##### `resetExternalSendersAllowed` <a name="resetExternalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetExternalSendersAllowed"></a>

```java
public void resetExternalSendersAllowed()
```

##### `resetHideFromAddressLists` <a name="resetHideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromAddressLists"></a>

```java
public void resetHideFromAddressLists()
```

##### `resetHideFromOutlookClients` <a name="resetHideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetHideFromOutlookClients"></a>

```java
public void resetHideFromOutlookClients()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetId"></a>

```java
public void resetId()
```

##### `resetMailEnabled` <a name="resetMailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailEnabled"></a>

```java
public void resetMailEnabled()
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetMailNickname"></a>

```java
public void resetMailNickname()
```

##### `resetOnpremisesGroupType` <a name="resetOnpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOnpremisesGroupType"></a>

```java
public void resetOnpremisesGroupType()
```

##### `resetOwners` <a name="resetOwners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetOwners"></a>

```java
public void resetOwners()
```

##### `resetPreventDuplicateNames` <a name="resetPreventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetPreventDuplicateNames"></a>

```java
public void resetPreventDuplicateNames()
```

##### `resetProvisioningOptions` <a name="resetProvisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetProvisioningOptions"></a>

```java
public void resetProvisioningOptions()
```

##### `resetSecurityEnabled` <a name="resetSecurityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetSecurityEnabled"></a>

```java
public void resetSecurityEnabled()
```

##### `resetTheme` <a name="resetTheme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTheme"></a>

```java
public void resetTheme()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTypes` <a name="resetTypes" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetTypes"></a>

```java
public void resetTypes()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetVisibility"></a>

```java
public void resetVisibility()
```

##### `resetWritebackEnabled` <a name="resetWritebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.resetWritebackEnabled"></a>

```java
public void resetWritebackEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembers;

GroupWithoutMembers.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembers;

GroupWithoutMembers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembers;

GroupWithoutMembers.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembers;

GroupWithoutMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroupWithoutMembers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GroupWithoutMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroupWithoutMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroupWithoutMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GroupWithoutMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail">mail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName">onpremisesNetbiosName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses">proxyAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput">administrativeUnitIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput">assignableToRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput">autoSubscribeNewMembersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput">behaviorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput">dynamicMembershipInput</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput">externalSendersAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput">hideFromAddressListsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput">hideFromOutlookClientsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput">mailEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput">mailNicknameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput">onpremisesGroupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput">ownersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput">preventDuplicateNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput">provisioningOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput">securityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput">themeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput">typesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput">writebackEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole">assignableToRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions">provisioningOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme">theme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled">writebackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dynamicMembership`<sup>Required</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembership"></a>

```java
public GroupWithoutMembersDynamicMembershipOutputReference getDynamicMembership();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference">GroupWithoutMembersDynamicMembershipOutputReference</a>

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesDomainName"></a>

```java
public java.lang.String getOnpremisesDomainName();
```

- *Type:* java.lang.String

---

##### `onpremisesNetbiosName`<sup>Required</sup> <a name="onpremisesNetbiosName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesNetbiosName"></a>

```java
public java.lang.String getOnpremisesNetbiosName();
```

- *Type:* java.lang.String

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSamAccountName"></a>

```java
public java.lang.String getOnpremisesSamAccountName();
```

- *Type:* java.lang.String

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSecurityIdentifier"></a>

```java
public java.lang.String getOnpremisesSecurityIdentifier();
```

- *Type:* java.lang.String

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesSyncEnabled"></a>

```java
public IResolvable getOnpremisesSyncEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.proxyAddresses"></a>

```java
public java.util.List<java.lang.String> getProxyAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeouts"></a>

```java
public GroupWithoutMembersTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference">GroupWithoutMembersTimeoutsOutputReference</a>

---

##### `administrativeUnitIdsInput`<sup>Optional</sup> <a name="administrativeUnitIdsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIdsInput"></a>

```java
public java.util.List<java.lang.String> getAdministrativeUnitIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignableToRoleInput`<sup>Optional</sup> <a name="assignableToRoleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRoleInput"></a>

```java
public java.lang.Object getAssignableToRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubscribeNewMembersInput`<sup>Optional</sup> <a name="autoSubscribeNewMembersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembersInput"></a>

```java
public java.lang.Object getAutoSubscribeNewMembersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviorsInput"></a>

```java
public java.util.List<java.lang.String> getBehaviorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dynamicMembershipInput`<sup>Optional</sup> <a name="dynamicMembershipInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.dynamicMembershipInput"></a>

```java
public GroupWithoutMembersDynamicMembership getDynamicMembershipInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---

##### `externalSendersAllowedInput`<sup>Optional</sup> <a name="externalSendersAllowedInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowedInput"></a>

```java
public java.lang.Object getExternalSendersAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideFromAddressListsInput`<sup>Optional</sup> <a name="hideFromAddressListsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressListsInput"></a>

```java
public java.lang.Object getHideFromAddressListsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideFromOutlookClientsInput`<sup>Optional</sup> <a name="hideFromOutlookClientsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClientsInput"></a>

```java
public java.lang.Object getHideFromOutlookClientsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mailEnabledInput`<sup>Optional</sup> <a name="mailEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabledInput"></a>

```java
public java.lang.Object getMailEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNicknameInput"></a>

```java
public java.lang.String getMailNicknameInput();
```

- *Type:* java.lang.String

---

##### `onpremisesGroupTypeInput`<sup>Optional</sup> <a name="onpremisesGroupTypeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupTypeInput"></a>

```java
public java.lang.String getOnpremisesGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.ownersInput"></a>

```java
public java.util.List<java.lang.String> getOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preventDuplicateNamesInput`<sup>Optional</sup> <a name="preventDuplicateNamesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNamesInput"></a>

```java
public java.lang.Object getPreventDuplicateNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningOptionsInput`<sup>Optional</sup> <a name="provisioningOptionsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptionsInput"></a>

```java
public java.util.List<java.lang.String> getProvisioningOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityEnabledInput`<sup>Optional</sup> <a name="securityEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabledInput"></a>

```java
public java.lang.Object getSecurityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.themeInput"></a>

```java
public java.lang.String getThemeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.typesInput"></a>

```java
public java.util.List<java.lang.String> getTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `writebackEnabledInput`<sup>Optional</sup> <a name="writebackEnabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabledInput"></a>

```java
public java.lang.Object getWritebackEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `administrativeUnitIds`<sup>Required</sup> <a name="administrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.administrativeUnitIds"></a>

```java
public java.util.List<java.lang.String> getAdministrativeUnitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignableToRole`<sup>Required</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.assignableToRole"></a>

```java
public java.lang.Object getAssignableToRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubscribeNewMembers`<sup>Required</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.autoSubscribeNewMembers"></a>

```java
public java.lang.Object getAutoSubscribeNewMembers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalSendersAllowed`<sup>Required</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.externalSendersAllowed"></a>

```java
public java.lang.Object getExternalSendersAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideFromAddressLists`<sup>Required</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromAddressLists"></a>

```java
public java.lang.Object getHideFromAddressLists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideFromOutlookClients`<sup>Required</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.hideFromOutlookClients"></a>

```java
public java.lang.Object getHideFromOutlookClients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mailEnabled`<sup>Required</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailEnabled"></a>

```java
public java.lang.Object getMailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

---

##### `onpremisesGroupType`<sup>Required</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.onpremisesGroupType"></a>

```java
public java.lang.String getOnpremisesGroupType();
```

- *Type:* java.lang.String

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preventDuplicateNames`<sup>Required</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.preventDuplicateNames"></a>

```java
public java.lang.Object getPreventDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningOptions`<sup>Required</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.provisioningOptions"></a>

```java
public java.util.List<java.lang.String> getProvisioningOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityEnabled`<sup>Required</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.securityEnabled"></a>

```java
public java.lang.Object getSecurityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `writebackEnabled`<sup>Required</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.writebackEnabled"></a>

```java
public java.lang.Object getWritebackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupWithoutMembersConfig <a name="GroupWithoutMembersConfig" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembersConfig;

GroupWithoutMembersConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .administrativeUnitIds(java.util.List<java.lang.String>)
//  .assignableToRole(java.lang.Boolean)
//  .assignableToRole(IResolvable)
//  .autoSubscribeNewMembers(java.lang.Boolean)
//  .autoSubscribeNewMembers(IResolvable)
//  .behaviors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .dynamicMembership(GroupWithoutMembersDynamicMembership)
//  .externalSendersAllowed(java.lang.Boolean)
//  .externalSendersAllowed(IResolvable)
//  .hideFromAddressLists(java.lang.Boolean)
//  .hideFromAddressLists(IResolvable)
//  .hideFromOutlookClients(java.lang.Boolean)
//  .hideFromOutlookClients(IResolvable)
//  .id(java.lang.String)
//  .mailEnabled(java.lang.Boolean)
//  .mailEnabled(IResolvable)
//  .mailNickname(java.lang.String)
//  .onpremisesGroupType(java.lang.String)
//  .owners(java.util.List<java.lang.String>)
//  .preventDuplicateNames(java.lang.Boolean)
//  .preventDuplicateNames(IResolvable)
//  .provisioningOptions(java.util.List<java.lang.String>)
//  .securityEnabled(java.lang.Boolean)
//  .securityEnabled(IResolvable)
//  .theme(java.lang.String)
//  .timeouts(GroupWithoutMembersTimeouts)
//  .types(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
//  .writebackEnabled(java.lang.Boolean)
//  .writebackEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds">administrativeUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | The administrative unit IDs in which the group should be. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole">assignableToRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers">autoSubscribeNewMembers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership">dynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed">externalSendersAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists">hideFromAddressLists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients">hideFromOutlookClients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#id GroupWithoutMembers#id}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled">mailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType">onpremisesGroupType</a></code> | <code>java.lang.String</code> | Indicates the target on-premise group type the group will be written back as. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames">preventDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions">provisioningOptions</a></code> | <code>java.util.List<java.lang.String></code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled">securityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme">theme</a></code> | <code>java.lang.String</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Specifies the group join policy and group content visibility. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled">writebackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#display_name GroupWithoutMembers#display_name}

---

##### `administrativeUnitIds`<sup>Optional</sup> <a name="administrativeUnitIds" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.administrativeUnitIds"></a>

```java
public java.util.List<java.lang.String> getAdministrativeUnitIds();
```

- *Type:* java.util.List<java.lang.String>

The administrative unit IDs in which the group should be.

If empty, the group will be created at the tenant level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#administrative_unit_ids GroupWithoutMembers#administrative_unit_ids}

---

##### `assignableToRole`<sup>Optional</sup> <a name="assignableToRole" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.assignableToRole"></a>

```java
public java.lang.Object getAssignableToRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#assignable_to_role GroupWithoutMembers#assignable_to_role}

---

##### `autoSubscribeNewMembers`<sup>Optional</sup> <a name="autoSubscribeNewMembers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.autoSubscribeNewMembers"></a>

```java
public java.lang.Object getAutoSubscribeNewMembers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#auto_subscribe_new_members GroupWithoutMembers#auto_subscribe_new_members}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#behaviors GroupWithoutMembers#behaviors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#description GroupWithoutMembers#description}

---

##### `dynamicMembership`<sup>Optional</sup> <a name="dynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.dynamicMembership"></a>

```java
public GroupWithoutMembersDynamicMembership getDynamicMembership();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#dynamic_membership GroupWithoutMembers#dynamic_membership}

---

##### `externalSendersAllowed`<sup>Optional</sup> <a name="externalSendersAllowed" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.externalSendersAllowed"></a>

```java
public java.lang.Object getExternalSendersAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#external_senders_allowed GroupWithoutMembers#external_senders_allowed}

---

##### `hideFromAddressLists`<sup>Optional</sup> <a name="hideFromAddressLists" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromAddressLists"></a>

```java
public java.lang.Object getHideFromAddressLists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#hide_from_address_lists GroupWithoutMembers#hide_from_address_lists}

---

##### `hideFromOutlookClients`<sup>Optional</sup> <a name="hideFromOutlookClients" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.hideFromOutlookClients"></a>

```java
public java.lang.Object getHideFromOutlookClients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#hide_from_outlook_clients GroupWithoutMembers#hide_from_outlook_clients}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#id GroupWithoutMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailEnabled`<sup>Optional</sup> <a name="mailEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailEnabled"></a>

```java
public java.lang.Object getMailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#mail_enabled GroupWithoutMembers#mail_enabled}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#mail_nickname GroupWithoutMembers#mail_nickname}

---

##### `onpremisesGroupType`<sup>Optional</sup> <a name="onpremisesGroupType" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.onpremisesGroupType"></a>

```java
public java.lang.String getOnpremisesGroupType();
```

- *Type:* java.lang.String

Indicates the target on-premise group type the group will be written back as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#onpremises_group_type GroupWithoutMembers#onpremises_group_type}

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#owners GroupWithoutMembers#owners}

---

##### `preventDuplicateNames`<sup>Optional</sup> <a name="preventDuplicateNames" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.preventDuplicateNames"></a>

```java
public java.lang.Object getPreventDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#prevent_duplicate_names GroupWithoutMembers#prevent_duplicate_names}

---

##### `provisioningOptions`<sup>Optional</sup> <a name="provisioningOptions" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.provisioningOptions"></a>

```java
public java.util.List<java.lang.String> getProvisioningOptions();
```

- *Type:* java.util.List<java.lang.String>

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#provisioning_options GroupWithoutMembers#provisioning_options}

---

##### `securityEnabled`<sup>Optional</sup> <a name="securityEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.securityEnabled"></a>

```java
public java.lang.Object getSecurityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#security_enabled GroupWithoutMembers#security_enabled}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#theme GroupWithoutMembers#theme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.timeouts"></a>

```java
public GroupWithoutMembersTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#timeouts GroupWithoutMembers#timeouts}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#types GroupWithoutMembers#types}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#visibility GroupWithoutMembers#visibility}

---

##### `writebackEnabled`<sup>Optional</sup> <a name="writebackEnabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersConfig.property.writebackEnabled"></a>

```java
public java.lang.Object getWritebackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this group should be synced from Azure AD to the on-premises directory when Azure AD Connect is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#writeback_enabled GroupWithoutMembers#writeback_enabled}

---

### GroupWithoutMembersDynamicMembership <a name="GroupWithoutMembersDynamicMembership" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembersDynamicMembership;

GroupWithoutMembersDynamicMembership.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .rule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule">rule</a></code> | <code>java.lang.String</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#enabled GroupWithoutMembers#enabled}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#rule GroupWithoutMembers#rule}

---

### GroupWithoutMembersTimeouts <a name="GroupWithoutMembersTimeouts" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembersTimeouts;

GroupWithoutMembersTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#create GroupWithoutMembers#create}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#read GroupWithoutMembers#read}. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#update GroupWithoutMembers#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#create GroupWithoutMembers#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#delete GroupWithoutMembers#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#read GroupWithoutMembers#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/group_without_members#update GroupWithoutMembers#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupWithoutMembersDynamicMembershipOutputReference <a name="GroupWithoutMembersDynamicMembershipOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembersDynamicMembershipOutputReference;

new GroupWithoutMembersDynamicMembershipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembershipOutputReference.property.internalValue"></a>

```java
public GroupWithoutMembersDynamicMembership getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersDynamicMembership">GroupWithoutMembersDynamicMembership</a>

---


### GroupWithoutMembersTimeoutsOutputReference <a name="GroupWithoutMembersTimeoutsOutputReference" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.group_without_members.GroupWithoutMembersTimeoutsOutputReference;

new GroupWithoutMembersTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.groupWithoutMembers.GroupWithoutMembersTimeouts">GroupWithoutMembersTimeouts</a>

---



