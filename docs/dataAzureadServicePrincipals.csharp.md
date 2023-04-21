# `data_azuread_service_principals`

Refer to the Terraform Registory for docs: [`data_azuread_service_principals`](https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals).

# `dataAzureadServicePrincipals` Submodule <a name="`dataAzureadServicePrincipals` Submodule" id="@cdktf/provider-azuread.dataAzureadServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipals <a name="DataAzureadServicePrincipals" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals azuread_service_principals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipals(Construct Scope, string Id, DataAzureadServicePrincipalsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig">DataAzureadServicePrincipalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig">DataAzureadServicePrincipalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetApplicationIds">ResetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetDisplayNames">ResetDisplayNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetIgnoreMissing">ResetIgnoreMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetObjectIds">ResetObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetReturnAll">ResetReturnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzureadServicePrincipalsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

---

##### `ResetApplicationIds` <a name="ResetApplicationIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetApplicationIds"></a>

```csharp
private void ResetApplicationIds()
```

##### `ResetDisplayNames` <a name="ResetDisplayNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetDisplayNames"></a>

```csharp
private void ResetDisplayNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreMissing` <a name="ResetIgnoreMissing" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetIgnoreMissing"></a>

```csharp
private void ResetIgnoreMissing()
```

##### `ResetObjectIds` <a name="ResetObjectIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetObjectIds"></a>

```csharp
private void ResetObjectIds()
```

##### `ResetReturnAll` <a name="ResetReturnAll" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetReturnAll"></a>

```csharp
private void ResetReturnAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadServicePrincipals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadServicePrincipals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DataAzureadServicePrincipals.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals">ServicePrincipals</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.applicationIdsInput">ApplicationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput">DisplayNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput">IgnoreMissingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput">ObjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput">ReturnAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.applicationIds">ApplicationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames">DisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing">IgnoreMissing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds">ObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll">ReturnAll</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.servicePrincipals"></a>

```csharp
public DataAzureadServicePrincipalsServicePrincipalsList ServicePrincipals { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList">DataAzureadServicePrincipalsServicePrincipalsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeouts"></a>

```csharp
public DataAzureadServicePrincipalsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference">DataAzureadServicePrincipalsTimeoutsOutputReference</a>

---

##### `ApplicationIdsInput`<sup>Optional</sup> <a name="ApplicationIdsInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.applicationIdsInput"></a>

```csharp
public string[] ApplicationIdsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNamesInput`<sup>Optional</sup> <a name="DisplayNamesInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNamesInput"></a>

```csharp
public string[] DisplayNamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingInput`<sup>Optional</sup> <a name="IgnoreMissingInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissingInput"></a>

```csharp
public object IgnoreMissingInput { get; }
```

- *Type:* object

---

##### `ObjectIdsInput`<sup>Optional</sup> <a name="ObjectIdsInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIdsInput"></a>

```csharp
public string[] ObjectIdsInput { get; }
```

- *Type:* string[]

---

##### `ReturnAllInput`<sup>Optional</sup> <a name="ReturnAllInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAllInput"></a>

```csharp
public object ReturnAllInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationIds`<sup>Required</sup> <a name="ApplicationIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.applicationIds"></a>

```csharp
public string[] ApplicationIds { get; }
```

- *Type:* string[]

---

##### `DisplayNames`<sup>Required</sup> <a name="DisplayNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.displayNames"></a>

```csharp
public string[] DisplayNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreMissing`<sup>Required</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.ignoreMissing"></a>

```csharp
public object IgnoreMissing { get; }
```

- *Type:* object

---

##### `ObjectIds`<sup>Required</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.objectIds"></a>

```csharp
public string[] ObjectIds { get; }
```

- *Type:* string[]

---

##### `ReturnAll`<sup>Required</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.returnAll"></a>

```csharp
public object ReturnAll { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalsConfig <a name="DataAzureadServicePrincipalsConfig" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ApplicationIds = null,
    string[] DisplayNames = null,
    string Id = null,
    object IgnoreMissing = null,
    string[] ObjectIds = null,
    object ReturnAll = null,
    DataAzureadServicePrincipalsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.applicationIds">ApplicationIds</a></code> | <code>string[]</code> | The application IDs (client IDs) of the applications associated with the service principals. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames">DisplayNames</a></code> | <code>string[]</code> | The display names of the applications associated with the service principals. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing">IgnoreMissing</a></code> | <code>object</code> | Ignore missing service principals and return the service principals that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds">ObjectIds</a></code> | <code>string[]</code> | The object IDs of the service principals. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll">ReturnAll</a></code> | <code>object</code> | Fetch all service principals with no filter and return all that were found. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationIds`<sup>Optional</sup> <a name="ApplicationIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.applicationIds"></a>

```csharp
public string[] ApplicationIds { get; set; }
```

- *Type:* string[]

The application IDs (client IDs) of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#application_ids DataAzureadServicePrincipals#application_ids}

---

##### `DisplayNames`<sup>Optional</sup> <a name="DisplayNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.displayNames"></a>

```csharp
public string[] DisplayNames { get; set; }
```

- *Type:* string[]

The display names of the applications associated with the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#display_names DataAzureadServicePrincipals#display_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissing`<sup>Optional</sup> <a name="IgnoreMissing" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.ignoreMissing"></a>

```csharp
public object IgnoreMissing { get; set; }
```

- *Type:* object

Ignore missing service principals and return the service principals that were found.

The data source will still fail if no service principals are found

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#ignore_missing DataAzureadServicePrincipals#ignore_missing}

---

##### `ObjectIds`<sup>Optional</sup> <a name="ObjectIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.objectIds"></a>

```csharp
public string[] ObjectIds { get; set; }
```

- *Type:* string[]

The object IDs of the service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#object_ids DataAzureadServicePrincipals#object_ids}

---

##### `ReturnAll`<sup>Optional</sup> <a name="ReturnAll" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.returnAll"></a>

```csharp
public object ReturnAll { get; set; }
```

- *Type:* object

Fetch all service principals with no filter and return all that were found.

The data source will still fail if no service principals are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#return_all DataAzureadServicePrincipals#return_all}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsConfig.property.timeouts"></a>

```csharp
public DataAzureadServicePrincipalsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts">DataAzureadServicePrincipalsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#timeouts DataAzureadServicePrincipals#timeouts}

---

### DataAzureadServicePrincipalsServicePrincipals <a name="DataAzureadServicePrincipalsServicePrincipals" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsServicePrincipals {

};
```


### DataAzureadServicePrincipalsTimeouts <a name="DataAzureadServicePrincipalsTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalsServicePrincipalsList <a name="DataAzureadServicePrincipalsServicePrincipalsList" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsServicePrincipalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get"></a>

```csharp
private DataAzureadServicePrincipalsServicePrincipalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzureadServicePrincipalsServicePrincipalsOutputReference <a name="DataAzureadServicePrincipalsServicePrincipalsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsServicePrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled">AccountEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId">ApplicationTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired">AppRoleAssignmentRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode">PreferredSingleSignOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames">ServicePrincipalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience">SignInAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.accountEnabled"></a>

```csharp
public IResolvable AccountEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationTenantId`<sup>Required</sup> <a name="ApplicationTenantId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.applicationTenantId"></a>

```csharp
public string ApplicationTenantId { get; }
```

- *Type:* string

---

##### `AppRoleAssignmentRequired`<sup>Required</sup> <a name="AppRoleAssignmentRequired" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.appRoleAssignmentRequired"></a>

```csharp
public IResolvable AppRoleAssignmentRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `PreferredSingleSignOnMode`<sup>Required</sup> <a name="PreferredSingleSignOnMode" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.preferredSingleSignOnMode"></a>

```csharp
public string PreferredSingleSignOnMode { get; }
```

- *Type:* string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.samlMetadataUrl"></a>

```csharp
public string SamlMetadataUrl { get; }
```

- *Type:* string

---

##### `ServicePrincipalNames`<sup>Required</sup> <a name="ServicePrincipalNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.servicePrincipalNames"></a>

```csharp
public string[] ServicePrincipalNames { get; }
```

- *Type:* string[]

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.signInAudience"></a>

```csharp
public string SignInAudience { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```csharp
public DataAzureadServicePrincipalsServicePrincipals InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsServicePrincipals">DataAzureadServicePrincipalsServicePrincipals</a>

---


### DataAzureadServicePrincipalsTimeoutsOutputReference <a name="DataAzureadServicePrincipalsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DataAzureadServicePrincipalsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipals.DataAzureadServicePrincipalsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



