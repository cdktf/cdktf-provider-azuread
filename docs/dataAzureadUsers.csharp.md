# `dataAzureadUsers` Submodule <a name="`dataAzureadUsers` Submodule" id="@cdktf/provider-azuread.dataAzureadUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUsers <a name="DataAzureadUsers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users azuread_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsers(Construct Scope, string Id, DataAzureadUsersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig">DataAzureadUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig">DataAzureadUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds">ResetEmployeeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing">ResetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames">ResetMailNicknames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails">ResetMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds">ResetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll">ResetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames">ResetUserPrincipalNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzureadUsersTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `ResetEmployeeIds` <a name="ResetEmployeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetEmployeeIds"></a>

```csharp
private void ResetEmployeeIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreMissing` <a name="ResetIgnoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetIgnoreMissing"></a>

```csharp
private void ResetIgnoreMissing()
```

##### `ResetMailNicknames` <a name="ResetMailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMailNicknames"></a>

```csharp
private void ResetMailNicknames()
```

##### `ResetMails` <a name="ResetMails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetMails"></a>

```csharp
private void ResetMails()
```

##### `ResetObjectIds` <a name="ResetObjectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetObjectIds"></a>

```csharp
private void ResetObjectIds()
```

##### `ResetReturnAll` <a name="ResetReturnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetReturnAll"></a>

```csharp
private void ResetReturnAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserPrincipalNames` <a name="ResetUserPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.resetUserPrincipalNames"></a>

```csharp
private void ResetUserPrincipalNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzureadUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users">Users</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput">EmployeeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput">IgnoreMissingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput">MailNicknamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput">MailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput">ObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput">ReturnAllInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput">UserPrincipalNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds">EmployeeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing">IgnoreMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames">MailNicknames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails">Mails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds">ObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll">ReturnAll</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames">UserPrincipalNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeouts"></a>

```csharp
public DataAzureadUsersTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference">DataAzureadUsersTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.users"></a>

```csharp
public DataAzureadUsersUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList">DataAzureadUsersUsersList</a>

---

##### `EmployeeIdsInput`<sup>Optional</sup> <a name="EmployeeIdsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIdsInput"></a>

```csharp
public string[] EmployeeIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingInput`<sup>Optional</sup> <a name="IgnoreMissingInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissingInput"></a>

```csharp
public bool|IResolvable IgnoreMissingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MailNicknamesInput`<sup>Optional</sup> <a name="MailNicknamesInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknamesInput"></a>

```csharp
public string[] MailNicknamesInput { get; }
```

- *Type:* string[]

---

##### `MailsInput`<sup>Optional</sup> <a name="MailsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailsInput"></a>

```csharp
public string[] MailsInput { get; }
```

- *Type:* string[]

---

##### `ObjectIdsInput`<sup>Optional</sup> <a name="ObjectIdsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIdsInput"></a>

```csharp
public string[] ObjectIdsInput { get; }
```

- *Type:* string[]

---

##### `ReturnAllInput`<sup>Optional</sup> <a name="ReturnAllInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAllInput"></a>

```csharp
public bool|IResolvable ReturnAllInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzureadUsersTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---

##### `UserPrincipalNamesInput`<sup>Optional</sup> <a name="UserPrincipalNamesInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNamesInput"></a>

```csharp
public string[] UserPrincipalNamesInput { get; }
```

- *Type:* string[]

---

##### `EmployeeIds`<sup>Required</sup> <a name="EmployeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.employeeIds"></a>

```csharp
public string[] EmployeeIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreMissing`<sup>Required</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.ignoreMissing"></a>

```csharp
public bool|IResolvable IgnoreMissing { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MailNicknames`<sup>Required</sup> <a name="MailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mailNicknames"></a>

```csharp
public string[] MailNicknames { get; }
```

- *Type:* string[]

---

##### `Mails`<sup>Required</sup> <a name="Mails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.mails"></a>

```csharp
public string[] Mails { get; }
```

- *Type:* string[]

---

##### `ObjectIds`<sup>Required</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.objectIds"></a>

```csharp
public string[] ObjectIds { get; }
```

- *Type:* string[]

---

##### `ReturnAll`<sup>Required</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.returnAll"></a>

```csharp
public bool|IResolvable ReturnAll { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UserPrincipalNames`<sup>Required</sup> <a name="UserPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.userPrincipalNames"></a>

```csharp
public string[] UserPrincipalNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUsersConfig <a name="DataAzureadUsersConfig" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] EmployeeIds = null,
    string Id = null,
    bool|IResolvable IgnoreMissing = null,
    string[] MailNicknames = null,
    string[] Mails = null,
    string[] ObjectIds = null,
    bool|IResolvable ReturnAll = null,
    DataAzureadUsersTimeouts Timeouts = null,
    string[] UserPrincipalNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds">EmployeeIds</a></code> | <code>string[]</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#id DataAzureadUsers#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing">IgnoreMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Ignore missing users and return users that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames">MailNicknames</a></code> | <code>string[]</code> | The email aliases of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails">Mails</a></code> | <code>string[]</code> | The SMTP address of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds">ObjectIds</a></code> | <code>string[]</code> | The object IDs of the users. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll">ReturnAll</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Fetch all users with no filter and return all that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames">UserPrincipalNames</a></code> | <code>string[]</code> | The user principal names (UPNs) of the users. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EmployeeIds`<sup>Optional</sup> <a name="EmployeeIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.employeeIds"></a>

```csharp
public string[] EmployeeIds { get; set; }
```

- *Type:* string[]

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#employee_ids DataAzureadUsers#employee_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#id DataAzureadUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissing`<sup>Optional</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.ignoreMissing"></a>

```csharp
public bool|IResolvable IgnoreMissing { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Ignore missing users and return users that were found.

The data source will still fail if no users are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#ignore_missing DataAzureadUsers#ignore_missing}

---

##### `MailNicknames`<sup>Optional</sup> <a name="MailNicknames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mailNicknames"></a>

```csharp
public string[] MailNicknames { get; set; }
```

- *Type:* string[]

The email aliases of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#mail_nicknames DataAzureadUsers#mail_nicknames}

---

##### `Mails`<sup>Optional</sup> <a name="Mails" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.mails"></a>

```csharp
public string[] Mails { get; set; }
```

- *Type:* string[]

The SMTP address of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#mails DataAzureadUsers#mails}

---

##### `ObjectIds`<sup>Optional</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.objectIds"></a>

```csharp
public string[] ObjectIds { get; set; }
```

- *Type:* string[]

The object IDs of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#object_ids DataAzureadUsers#object_ids}

---

##### `ReturnAll`<sup>Optional</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.returnAll"></a>

```csharp
public bool|IResolvable ReturnAll { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Fetch all users with no filter and return all that were found.

The data source will still fail if no users are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#return_all DataAzureadUsers#return_all}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.timeouts"></a>

```csharp
public DataAzureadUsersTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#timeouts DataAzureadUsers#timeouts}

---

##### `UserPrincipalNames`<sup>Optional</sup> <a name="UserPrincipalNames" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersConfig.property.userPrincipalNames"></a>

```csharp
public string[] UserPrincipalNames { get; set; }
```

- *Type:* string[]

The user principal names (UPNs) of the users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#user_principal_names DataAzureadUsers#user_principal_names}

---

### DataAzureadUsersTimeouts <a name="DataAzureadUsersTimeouts" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#read DataAzureadUsers#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/data-sources/users#read DataAzureadUsers#read}.

---

### DataAzureadUsersUsers <a name="DataAzureadUsersUsers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUsersTimeoutsOutputReference <a name="DataAzureadUsersTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzureadUsersTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersTimeouts">DataAzureadUsersTimeouts</a>

---


### DataAzureadUsersUsersList <a name="DataAzureadUsersUsersList" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get"></a>

```csharp
private DataAzureadUsersUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzureadUsersUsersOutputReference <a name="DataAzureadUsersUsersOutputReference" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadUsersUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled">AccountEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId">EmployeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail">Mail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname">MailNickname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId">OnpremisesImmutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName">OnpremisesUserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation">UsageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName">UserPrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.accountEnabled"></a>

```csharp
public IResolvable AccountEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.employeeId"></a>

```csharp
public string EmployeeId { get; }
```

- *Type:* string

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mail"></a>

```csharp
public string Mail { get; }
```

- *Type:* string

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.mailNickname"></a>

```csharp
public string MailNickname { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `OnpremisesImmutableId`<sup>Required</sup> <a name="OnpremisesImmutableId" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesImmutableId"></a>

```csharp
public string OnpremisesImmutableId { get; }
```

- *Type:* string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesSamAccountName"></a>

```csharp
public string OnpremisesSamAccountName { get; }
```

- *Type:* string

---

##### `OnpremisesUserPrincipalName`<sup>Required</sup> <a name="OnpremisesUserPrincipalName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.onpremisesUserPrincipalName"></a>

```csharp
public string OnpremisesUserPrincipalName { get; }
```

- *Type:* string

---

##### `UsageLocation`<sup>Required</sup> <a name="UsageLocation" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.usageLocation"></a>

```csharp
public string UsageLocation { get; }
```

- *Type:* string

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.userPrincipalName"></a>

```csharp
public string UserPrincipalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsersOutputReference.property.internalValue"></a>

```csharp
public DataAzureadUsersUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUsers.DataAzureadUsersUsers">DataAzureadUsersUsers</a>

---



