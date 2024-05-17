# `dataAzureadAccessPackageCatalog` Submodule <a name="`dataAzureadAccessPackageCatalog` Submodule" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAccessPackageCatalog <a name="DataAzureadAccessPackageCatalog" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog azuread_access_package_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadAccessPackageCatalog(Construct Scope, string Id, DataAzureadAccessPackageCatalogConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig">DataAzureadAccessPackageCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig">DataAzureadAccessPackageCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzureadAccessPackageCatalogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetObjectId"></a>

```csharp
private void ResetObjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadAccessPackageCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadAccessPackageCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadAccessPackageCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadAccessPackageCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadAccessPackageCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzureadAccessPackageCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzureadAccessPackageCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzureadAccessPackageCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAccessPackageCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.externallyVisible">ExternallyVisible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.published">Published</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference">DataAzureadAccessPackageCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternallyVisible`<sup>Required</sup> <a name="ExternallyVisible" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.externallyVisible"></a>

```csharp
public IResolvable ExternallyVisible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.published"></a>

```csharp
public IResolvable Published { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeouts"></a>

```csharp
public DataAzureadAccessPackageCatalogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference">DataAzureadAccessPackageCatalogTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAccessPackageCatalogConfig <a name="DataAzureadAccessPackageCatalogConfig" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadAccessPackageCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName = null,
    string Id = null,
    string ObjectId = null,
    DataAzureadAccessPackageCatalogTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#id DataAzureadAccessPackageCatalog#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.objectId">ObjectId</a></code> | <code>string</code> | The ID of this access package catalog. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#display_name DataAzureadAccessPackageCatalog#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#id DataAzureadAccessPackageCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

The ID of this access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#object_id DataAzureadAccessPackageCatalog#object_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogConfig.property.timeouts"></a>

```csharp
public DataAzureadAccessPackageCatalogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts">DataAzureadAccessPackageCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#timeouts DataAzureadAccessPackageCatalog#timeouts}

---

### DataAzureadAccessPackageCatalogTimeouts <a name="DataAzureadAccessPackageCatalogTimeouts" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadAccessPackageCatalogTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#read DataAzureadAccessPackageCatalog#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/access_package_catalog#read DataAzureadAccessPackageCatalog#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAccessPackageCatalogTimeoutsOutputReference <a name="DataAzureadAccessPackageCatalogTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadAccessPackageCatalogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadAccessPackageCatalog.DataAzureadAccessPackageCatalogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



