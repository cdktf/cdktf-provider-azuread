# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-azuread.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-azuread.group.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.Group.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new Group(Construct Scope, string Id, GroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.group.Group.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.putDynamicMembership">PutDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetAssignableToRole">ResetAssignableToRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetAutoSubscribeNewMembers">ResetAutoSubscribeNewMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetDynamicMembership">ResetDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetExternalSendersAllowed">ResetExternalSendersAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetHideFromAddressLists">ResetHideFromAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetHideFromOutlookClients">ResetHideFromOutlookClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMailEnabled">ResetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMailNickname">ResetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetPreventDuplicateNames">ResetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetProvisioningOptions">ResetProvisioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetSecurityEnabled">ResetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.group.Group.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.group.Group.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.group.Group.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.group.Group.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.group.Group.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.group.Group.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.group.Group.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.group.Group.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.group.Group.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.group.Group.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.group.Group.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.group.Group.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.group.Group.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.group.Group.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.group.Group.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.group.Group.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.group.Group.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDynamicMembership` <a name="PutDynamicMembership" id="@cdktf/provider-azuread.group.Group.putDynamicMembership"></a>

```csharp
private void PutDynamicMembership(GroupDynamicMembership Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.group.Group.putDynamicMembership.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.group.Group.putTimeouts"></a>

```csharp
private void PutTimeouts(GroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.group.Group.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

---

##### `ResetAssignableToRole` <a name="ResetAssignableToRole" id="@cdktf/provider-azuread.group.Group.resetAssignableToRole"></a>

```csharp
private void ResetAssignableToRole()
```

##### `ResetAutoSubscribeNewMembers` <a name="ResetAutoSubscribeNewMembers" id="@cdktf/provider-azuread.group.Group.resetAutoSubscribeNewMembers"></a>

```csharp
private void ResetAutoSubscribeNewMembers()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-azuread.group.Group.resetBehaviors"></a>

```csharp
private void ResetBehaviors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.group.Group.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamicMembership` <a name="ResetDynamicMembership" id="@cdktf/provider-azuread.group.Group.resetDynamicMembership"></a>

```csharp
private void ResetDynamicMembership()
```

##### `ResetExternalSendersAllowed` <a name="ResetExternalSendersAllowed" id="@cdktf/provider-azuread.group.Group.resetExternalSendersAllowed"></a>

```csharp
private void ResetExternalSendersAllowed()
```

##### `ResetHideFromAddressLists` <a name="ResetHideFromAddressLists" id="@cdktf/provider-azuread.group.Group.resetHideFromAddressLists"></a>

```csharp
private void ResetHideFromAddressLists()
```

##### `ResetHideFromOutlookClients` <a name="ResetHideFromOutlookClients" id="@cdktf/provider-azuread.group.Group.resetHideFromOutlookClients"></a>

```csharp
private void ResetHideFromOutlookClients()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.group.Group.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMailEnabled` <a name="ResetMailEnabled" id="@cdktf/provider-azuread.group.Group.resetMailEnabled"></a>

```csharp
private void ResetMailEnabled()
```

##### `ResetMailNickname` <a name="ResetMailNickname" id="@cdktf/provider-azuread.group.Group.resetMailNickname"></a>

```csharp
private void ResetMailNickname()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-azuread.group.Group.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.group.Group.resetOwners"></a>

```csharp
private void ResetOwners()
```

##### `ResetPreventDuplicateNames` <a name="ResetPreventDuplicateNames" id="@cdktf/provider-azuread.group.Group.resetPreventDuplicateNames"></a>

```csharp
private void ResetPreventDuplicateNames()
```

##### `ResetProvisioningOptions` <a name="ResetProvisioningOptions" id="@cdktf/provider-azuread.group.Group.resetProvisioningOptions"></a>

```csharp
private void ResetProvisioningOptions()
```

##### `ResetSecurityEnabled` <a name="ResetSecurityEnabled" id="@cdktf/provider-azuread.group.Group.resetSecurityEnabled"></a>

```csharp
private void ResetSecurityEnabled()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktf/provider-azuread.group.Group.resetTheme"></a>

```csharp
private void ResetTheme()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.group.Group.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktf/provider-azuread.group.Group.resetTypes"></a>

```csharp
private void ResetTypes()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-azuread.group.Group.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.group.Group.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Group.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.group.Group.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.group.Group.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Group.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.group.Group.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

Group.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mail">Mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesNetbiosName">OnpremisesNetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.proxyAddresses">ProxyAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.assignableToRoleInput">AssignableToRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembersInput">AutoSubscribeNewMembersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.behaviorsInput">BehaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.dynamicMembershipInput">DynamicMembershipInput</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.externalSendersAllowedInput">ExternalSendersAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromAddressListsInput">HideFromAddressListsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromOutlookClientsInput">HideFromOutlookClientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailEnabledInput">MailEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailNicknameInput">MailNicknameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.ownersInput">OwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preventDuplicateNamesInput">PreventDuplicateNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioningOptionsInput">ProvisioningOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.securityEnabledInput">SecurityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.themeInput">ThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.assignableToRole">AssignableToRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.behaviors">Behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailEnabled">MailEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.mailNickname">MailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.provisioningOptions">ProvisioningOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.securityEnabled">SecurityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.theme">Theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.group.Group.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.group.Group.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.group.Group.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.group.Group.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.group.Group.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.group.Group.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.group.Group.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.group.Group.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.group.Group.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.group.Group.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.group.Group.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.group.Group.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.group.Group.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.group.Group.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DynamicMembership`<sup>Required</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.group.Group.property.dynamicMembership"></a>

```csharp
public GroupDynamicMembershipOutputReference DynamicMembership { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference">GroupDynamicMembershipOutputReference</a>

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.group.Group.property.mail"></a>

```csharp
public string Mail { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.group.Group.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.group.Group.property.onpremisesDomainName"></a>

```csharp
public string OnpremisesDomainName { get; }
```

- *Type:* string

---

##### `OnpremisesNetbiosName`<sup>Required</sup> <a name="OnpremisesNetbiosName" id="@cdktf/provider-azuread.group.Group.property.onpremisesNetbiosName"></a>

```csharp
public string OnpremisesNetbiosName { get; }
```

- *Type:* string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.group.Group.property.onpremisesSamAccountName"></a>

```csharp
public string OnpremisesSamAccountName { get; }
```

- *Type:* string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.group.Group.property.onpremisesSecurityIdentifier"></a>

```csharp
public string OnpremisesSecurityIdentifier { get; }
```

- *Type:* string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.group.Group.property.onpremisesSyncEnabled"></a>

```csharp
public IResolvable OnpremisesSyncEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.group.Group.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.group.Group.property.proxyAddresses"></a>

```csharp
public string[] ProxyAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.group.Group.property.timeouts"></a>

```csharp
public GroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `AssignableToRoleInput`<sup>Optional</sup> <a name="AssignableToRoleInput" id="@cdktf/provider-azuread.group.Group.property.assignableToRoleInput"></a>

```csharp
public object AssignableToRoleInput { get; }
```

- *Type:* object

---

##### `AutoSubscribeNewMembersInput`<sup>Optional</sup> <a name="AutoSubscribeNewMembersInput" id="@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembersInput"></a>

```csharp
public object AutoSubscribeNewMembersInput { get; }
```

- *Type:* object

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-azuread.group.Group.property.behaviorsInput"></a>

```csharp
public string[] BehaviorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.group.Group.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.group.Group.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DynamicMembershipInput`<sup>Optional</sup> <a name="DynamicMembershipInput" id="@cdktf/provider-azuread.group.Group.property.dynamicMembershipInput"></a>

```csharp
public GroupDynamicMembership DynamicMembershipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---

##### `ExternalSendersAllowedInput`<sup>Optional</sup> <a name="ExternalSendersAllowedInput" id="@cdktf/provider-azuread.group.Group.property.externalSendersAllowedInput"></a>

```csharp
public object ExternalSendersAllowedInput { get; }
```

- *Type:* object

---

##### `HideFromAddressListsInput`<sup>Optional</sup> <a name="HideFromAddressListsInput" id="@cdktf/provider-azuread.group.Group.property.hideFromAddressListsInput"></a>

```csharp
public object HideFromAddressListsInput { get; }
```

- *Type:* object

---

##### `HideFromOutlookClientsInput`<sup>Optional</sup> <a name="HideFromOutlookClientsInput" id="@cdktf/provider-azuread.group.Group.property.hideFromOutlookClientsInput"></a>

```csharp
public object HideFromOutlookClientsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.group.Group.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MailEnabledInput`<sup>Optional</sup> <a name="MailEnabledInput" id="@cdktf/provider-azuread.group.Group.property.mailEnabledInput"></a>

```csharp
public object MailEnabledInput { get; }
```

- *Type:* object

---

##### `MailNicknameInput`<sup>Optional</sup> <a name="MailNicknameInput" id="@cdktf/provider-azuread.group.Group.property.mailNicknameInput"></a>

```csharp
public string MailNicknameInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-azuread.group.Group.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.group.Group.property.ownersInput"></a>

```csharp
public string[] OwnersInput { get; }
```

- *Type:* string[]

---

##### `PreventDuplicateNamesInput`<sup>Optional</sup> <a name="PreventDuplicateNamesInput" id="@cdktf/provider-azuread.group.Group.property.preventDuplicateNamesInput"></a>

```csharp
public object PreventDuplicateNamesInput { get; }
```

- *Type:* object

---

##### `ProvisioningOptionsInput`<sup>Optional</sup> <a name="ProvisioningOptionsInput" id="@cdktf/provider-azuread.group.Group.property.provisioningOptionsInput"></a>

```csharp
public string[] ProvisioningOptionsInput { get; }
```

- *Type:* string[]

---

##### `SecurityEnabledInput`<sup>Optional</sup> <a name="SecurityEnabledInput" id="@cdktf/provider-azuread.group.Group.property.securityEnabledInput"></a>

```csharp
public object SecurityEnabledInput { get; }
```

- *Type:* object

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktf/provider-azuread.group.Group.property.themeInput"></a>

```csharp
public string ThemeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.group.Group.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-azuread.group.Group.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azuread.group.Group.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AssignableToRole`<sup>Required</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.group.Group.property.assignableToRole"></a>

```csharp
public object AssignableToRole { get; }
```

- *Type:* object

---

##### `AutoSubscribeNewMembers`<sup>Required</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.group.Group.property.autoSubscribeNewMembers"></a>

```csharp
public object AutoSubscribeNewMembers { get; }
```

- *Type:* object

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-azuread.group.Group.property.behaviors"></a>

```csharp
public string[] Behaviors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.group.Group.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.group.Group.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalSendersAllowed`<sup>Required</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.group.Group.property.externalSendersAllowed"></a>

```csharp
public object ExternalSendersAllowed { get; }
```

- *Type:* object

---

##### `HideFromAddressLists`<sup>Required</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.group.Group.property.hideFromAddressLists"></a>

```csharp
public object HideFromAddressLists { get; }
```

- *Type:* object

---

##### `HideFromOutlookClients`<sup>Required</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.group.Group.property.hideFromOutlookClients"></a>

```csharp
public object HideFromOutlookClients { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.group.Group.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MailEnabled`<sup>Required</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.group.Group.property.mailEnabled"></a>

```csharp
public object MailEnabled { get; }
```

- *Type:* object

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.group.Group.property.mailNickname"></a>

```csharp
public string MailNickname { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-azuread.group.Group.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.group.Group.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `PreventDuplicateNames`<sup>Required</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.group.Group.property.preventDuplicateNames"></a>

```csharp
public object PreventDuplicateNames { get; }
```

- *Type:* object

---

##### `ProvisioningOptions`<sup>Required</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.group.Group.property.provisioningOptions"></a>

```csharp
public string[] ProvisioningOptions { get; }
```

- *Type:* string[]

---

##### `SecurityEnabled`<sup>Required</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.group.Group.property.securityEnabled"></a>

```csharp
public object SecurityEnabled { get; }
```

- *Type:* object

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktf/provider-azuread.group.Group.property.theme"></a>

```csharp
public string Theme { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azuread.group.Group.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azuread.group.Group.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.group.Group.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-azuread.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object AssignableToRole = null,
    object AutoSubscribeNewMembers = null,
    string[] Behaviors = null,
    string Description = null,
    GroupDynamicMembership DynamicMembership = null,
    object ExternalSendersAllowed = null,
    object HideFromAddressLists = null,
    object HideFromOutlookClients = null,
    string Id = null,
    object MailEnabled = null,
    string MailNickname = null,
    string[] Members = null,
    string[] Owners = null,
    object PreventDuplicateNames = null,
    string[] ProvisioningOptions = null,
    object SecurityEnabled = null,
    string Theme = null,
    GroupTimeouts Timeouts = null,
    string[] Types = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.assignableToRole">AssignableToRole</a></code> | <code>object</code> | Indicates whether this group can be assigned to an Azure Active Directory role. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>object</code> | Indicates whether new members added to the group will be auto-subscribed to receive email notifications. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.behaviors">Behaviors</a></code> | <code>string[]</code> | The group behaviours for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.description">Description</a></code> | <code>string</code> | The description for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | dynamic_membership block. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>object</code> | Indicates whether people external to the organization can send messages to the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>object</code> | Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>object</code> | Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#id Group#id}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.mailEnabled">MailEnabled</a></code> | <code>object</code> | Whether the group is a mail enabled, with a shared group mailbox. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.mailNickname">MailNickname</a></code> | <code>string</code> | The mail alias for the group, unique in the organisation. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.members">Members</a></code> | <code>string[]</code> | A set of members who should be present in this group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.owners">Owners</a></code> | <code>string[]</code> | A set of owners who own this group. Supported object types are Users or Service Principals. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>object</code> | If `true`, will return an error if an existing group is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.provisioningOptions">ProvisioningOptions</a></code> | <code>string[]</code> | The group provisioning options for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.securityEnabled">SecurityEnabled</a></code> | <code>object</code> | Whether the group is a security group for controlling access to in-app resources. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.theme">Theme</a></code> | <code>string</code> | The colour theme for a Microsoft 365 group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.types">Types</a></code> | <code>string[]</code> | A set of group types to configure for the group. |
| <code><a href="#@cdktf/provider-azuread.group.GroupConfig.property.visibility">Visibility</a></code> | <code>string</code> | Specifies the group join policy and group content visibility. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.group.GroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.group.GroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.group.GroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.group.GroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.group.GroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.group.GroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.group.GroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.group.GroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#display_name Group#display_name}

---

##### `AssignableToRole`<sup>Optional</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.group.GroupConfig.property.assignableToRole"></a>

```csharp
public object AssignableToRole { get; set; }
```

- *Type:* object

Indicates whether this group can be assigned to an Azure Active Directory role.

This property can only be `true` for security-enabled groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#assignable_to_role Group#assignable_to_role}

---

##### `AutoSubscribeNewMembers`<sup>Optional</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.group.GroupConfig.property.autoSubscribeNewMembers"></a>

```csharp
public object AutoSubscribeNewMembers { get; set; }
```

- *Type:* object

Indicates whether new members added to the group will be auto-subscribed to receive email notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#auto_subscribe_new_members Group#auto_subscribe_new_members}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-azuread.group.GroupConfig.property.behaviors"></a>

```csharp
public string[] Behaviors { get; set; }
```

- *Type:* string[]

The group behaviours for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#behaviors Group#behaviors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.group.GroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#description Group#description}

---

##### `DynamicMembership`<sup>Optional</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.group.GroupConfig.property.dynamicMembership"></a>

```csharp
public GroupDynamicMembership DynamicMembership { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

dynamic_membership block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#dynamic_membership Group#dynamic_membership}

---

##### `ExternalSendersAllowed`<sup>Optional</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.group.GroupConfig.property.externalSendersAllowed"></a>

```csharp
public object ExternalSendersAllowed { get; set; }
```

- *Type:* object

Indicates whether people external to the organization can send messages to the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#external_senders_allowed Group#external_senders_allowed}

---

##### `HideFromAddressLists`<sup>Optional</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.group.GroupConfig.property.hideFromAddressLists"></a>

```csharp
public object HideFromAddressLists { get; set; }
```

- *Type:* object

Indicates whether the group is displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#hide_from_address_lists Group#hide_from_address_lists}

---

##### `HideFromOutlookClients`<sup>Optional</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.group.GroupConfig.property.hideFromOutlookClients"></a>

```csharp
public object HideFromOutlookClients { get; set; }
```

- *Type:* object

Indicates whether the group is displayed in Outlook clients, such as Outlook for Windows and Outlook on the web.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#hide_from_outlook_clients Group#hide_from_outlook_clients}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.group.GroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MailEnabled`<sup>Optional</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.group.GroupConfig.property.mailEnabled"></a>

```csharp
public object MailEnabled { get; set; }
```

- *Type:* object

Whether the group is a mail enabled, with a shared group mailbox.

At least one of `mail_enabled` or `security_enabled` must be specified. A group can be mail enabled *and* security enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#mail_enabled Group#mail_enabled}

---

##### `MailNickname`<sup>Optional</sup> <a name="MailNickname" id="@cdktf/provider-azuread.group.GroupConfig.property.mailNickname"></a>

```csharp
public string MailNickname { get; set; }
```

- *Type:* string

The mail alias for the group, unique in the organisation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#mail_nickname Group#mail_nickname}

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-azuread.group.GroupConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

A set of members who should be present in this group.

Supported object types are Users, Groups or Service Principals

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#members Group#members}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.group.GroupConfig.property.owners"></a>

```csharp
public string[] Owners { get; set; }
```

- *Type:* string[]

A set of owners who own this group. Supported object types are Users or Service Principals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#owners Group#owners}

---

##### `PreventDuplicateNames`<sup>Optional</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.group.GroupConfig.property.preventDuplicateNames"></a>

```csharp
public object PreventDuplicateNames { get; set; }
```

- *Type:* object

If `true`, will return an error if an existing group is found with the same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#prevent_duplicate_names Group#prevent_duplicate_names}

---

##### `ProvisioningOptions`<sup>Optional</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.group.GroupConfig.property.provisioningOptions"></a>

```csharp
public string[] ProvisioningOptions { get; set; }
```

- *Type:* string[]

The group provisioning options for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#provisioning_options Group#provisioning_options}

---

##### `SecurityEnabled`<sup>Optional</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.group.GroupConfig.property.securityEnabled"></a>

```csharp
public object SecurityEnabled { get; set; }
```

- *Type:* object

Whether the group is a security group for controlling access to in-app resources.

At least one of `security_enabled` or `mail_enabled` must be specified. A group can be security enabled *and* mail enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#security_enabled Group#security_enabled}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktf/provider-azuread.group.GroupConfig.property.theme"></a>

```csharp
public string Theme { get; set; }
```

- *Type:* string

The colour theme for a Microsoft 365 group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#theme Group#theme}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.group.GroupConfig.property.timeouts"></a>

```csharp
public GroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#timeouts Group#timeouts}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktf/provider-azuread.group.GroupConfig.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

A set of group types to configure for the group.

`Unified` specifies a Microsoft 365 group. Required when `mail_enabled` is true

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#types Group#types}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-azuread.group.GroupConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Specifies the group join policy and group content visibility.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#visibility Group#visibility}

---

### GroupDynamicMembership <a name="GroupDynamicMembership" id="@cdktf/provider-azuread.group.GroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupDynamicMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupDynamicMembership {
    object Enabled,
    string Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#enabled Group#enabled}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership.property.rule">Rule</a></code> | <code>string</code> | Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.group.GroupDynamicMembership.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#enabled Group#enabled}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.group.GroupDynamicMembership.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Rule to determine members for a dynamic group. Required when `group_types` contains 'DynamicMembership'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#rule Group#rule}

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktf/provider-azuread.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.group.GroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#create Group#create}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#delete Group#delete}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#read Group#read}. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#update Group#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.group.GroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#create Group#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.group.GroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#delete Group#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.group.GroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#read Group#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.group.GroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group#update Group#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDynamicMembershipOutputReference <a name="GroupDynamicMembershipOutputReference" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupDynamicMembershipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.group.GroupDynamicMembershipOutputReference.property.internalValue"></a>

```csharp
public GroupDynamicMembership InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.group.GroupDynamicMembership">GroupDynamicMembership</a>

---


### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new GroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



