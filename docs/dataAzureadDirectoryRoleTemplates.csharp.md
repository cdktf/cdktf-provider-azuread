# `data_azuread_directory_role_templates`

Refer to the Terraform Registory for docs: [`data_azuread_directory_role_templates`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates).

# `dataAzureadDirectoryRoleTemplates` Submodule <a name="`dataAzureadDirectoryRoleTemplates` Submodule" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDirectoryRoleTemplates <a name="DataAzureadDirectoryRoleTemplates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates azuread_directory_role_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplates(Construct Scope, string Id, DataAzureadDirectoryRoleTemplatesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig">DataAzureadDirectoryRoleTemplatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig">DataAzureadDirectoryRoleTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzureadDirectoryRoleTemplatesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadDirectoryRoleTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadDirectoryRoleTemplates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadDirectoryRoleTemplates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadDirectoryRoleTemplates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadDirectoryRoleTemplates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzureadDirectoryRoleTemplates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadDirectoryRoleTemplates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadDirectoryRoleTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadDirectoryRoleTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.objectIds">ObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.roleTemplates">RoleTemplates</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList">DataAzureadDirectoryRoleTemplatesRoleTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference">DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ObjectIds`<sup>Required</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.objectIds"></a>

```csharp
public string[] ObjectIds { get; }
```

- *Type:* string[]

---

##### `RoleTemplates`<sup>Required</sup> <a name="RoleTemplates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.roleTemplates"></a>

```csharp
public DataAzureadDirectoryRoleTemplatesRoleTemplatesList RoleTemplates { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList">DataAzureadDirectoryRoleTemplatesRoleTemplatesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeouts"></a>

```csharp
public DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference">DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDirectoryRoleTemplatesConfig <a name="DataAzureadDirectoryRoleTemplatesConfig" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataAzureadDirectoryRoleTemplatesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.timeouts"></a>

```csharp
public DataAzureadDirectoryRoleTemplatesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#timeouts DataAzureadDirectoryRoleTemplates#timeouts}

---

### DataAzureadDirectoryRoleTemplatesRoleTemplates <a name="DataAzureadDirectoryRoleTemplatesRoleTemplates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesRoleTemplates {

};
```


### DataAzureadDirectoryRoleTemplatesTimeouts <a name="DataAzureadDirectoryRoleTemplatesTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#read DataAzureadDirectoryRoleTemplates#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/data-sources/directory_role_templates#read DataAzureadDirectoryRoleTemplates#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDirectoryRoleTemplatesRoleTemplatesList <a name="DataAzureadDirectoryRoleTemplatesRoleTemplatesList" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesRoleTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get"></a>

```csharp
private DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference <a name="DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates">DataAzureadDirectoryRoleTemplatesRoleTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.internalValue"></a>

```csharp
public DataAzureadDirectoryRoleTemplatesRoleTemplates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates">DataAzureadDirectoryRoleTemplatesRoleTemplates</a>

---


### DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference <a name="DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



