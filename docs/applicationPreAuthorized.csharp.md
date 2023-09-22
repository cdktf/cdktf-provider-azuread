# `azuread_application_pre_authorized`

Refer to the Terraform Registory for docs: [`azuread_application_pre_authorized`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized).

# `applicationPreAuthorized` Submodule <a name="`applicationPreAuthorized` Submodule" id="@cdktf/provider-azuread.applicationPreAuthorized"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPreAuthorized <a name="ApplicationPreAuthorized" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized azuread_application_pre_authorized}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPreAuthorized(Construct Scope, string Id, ApplicationPreAuthorizedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig">ApplicationPreAuthorizedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig">ApplicationPreAuthorizedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationPreAuthorizedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPreAuthorized.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPreAuthorized.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

ApplicationPreAuthorized.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference">ApplicationPreAuthorizedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectIdInput">ApplicationObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppIdInput">AuthorizedAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIdsInput">PermissionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppId">AuthorizedAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIds">PermissionIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeouts"></a>

```csharp
public ApplicationPreAuthorizedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference">ApplicationPreAuthorizedTimeoutsOutputReference</a>

---

##### `ApplicationObjectIdInput`<sup>Optional</sup> <a name="ApplicationObjectIdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectIdInput"></a>

```csharp
public string ApplicationObjectIdInput { get; }
```

- *Type:* string

---

##### `AuthorizedAppIdInput`<sup>Optional</sup> <a name="AuthorizedAppIdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppIdInput"></a>

```csharp
public string AuthorizedAppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionIdsInput`<sup>Optional</sup> <a name="PermissionIdsInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIdsInput"></a>

```csharp
public string[] PermissionIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; }
```

- *Type:* string

---

##### `AuthorizedAppId`<sup>Required</sup> <a name="AuthorizedAppId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.authorizedAppId"></a>

```csharp
public string AuthorizedAppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PermissionIds`<sup>Required</sup> <a name="PermissionIds" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.permissionIds"></a>

```csharp
public string[] PermissionIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorized.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPreAuthorizedConfig <a name="ApplicationPreAuthorizedConfig" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPreAuthorizedConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationObjectId,
    string AuthorizedAppId,
    string[] PermissionIds,
    string Id = null,
    ApplicationPreAuthorizedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.applicationObjectId">ApplicationObjectId</a></code> | <code>string</code> | The object ID of the application to which this pre-authorized application should be added. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.authorizedAppId">AuthorizedAppId</a></code> | <code>string</code> | The application ID of the pre-authorized application. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.permissionIds">PermissionIds</a></code> | <code>string[]</code> | The IDs of the permission scopes required by the pre-authorized application. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#id ApplicationPreAuthorized#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationObjectId`<sup>Required</sup> <a name="ApplicationObjectId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.applicationObjectId"></a>

```csharp
public string ApplicationObjectId { get; set; }
```

- *Type:* string

The object ID of the application to which this pre-authorized application should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#application_object_id ApplicationPreAuthorized#application_object_id}

---

##### `AuthorizedAppId`<sup>Required</sup> <a name="AuthorizedAppId" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.authorizedAppId"></a>

```csharp
public string AuthorizedAppId { get; set; }
```

- *Type:* string

The application ID of the pre-authorized application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#authorized_app_id ApplicationPreAuthorized#authorized_app_id}

---

##### `PermissionIds`<sup>Required</sup> <a name="PermissionIds" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.permissionIds"></a>

```csharp
public string[] PermissionIds { get; set; }
```

- *Type:* string[]

The IDs of the permission scopes required by the pre-authorized application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#permission_ids ApplicationPreAuthorized#permission_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#id ApplicationPreAuthorized#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedConfig.property.timeouts"></a>

```csharp
public ApplicationPreAuthorizedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts">ApplicationPreAuthorizedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#timeouts ApplicationPreAuthorized#timeouts}

---

### ApplicationPreAuthorizedTimeouts <a name="ApplicationPreAuthorizedTimeouts" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPreAuthorizedTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#create ApplicationPreAuthorized#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#delete ApplicationPreAuthorized#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#read ApplicationPreAuthorized#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#update ApplicationPreAuthorized#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#create ApplicationPreAuthorized#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#delete ApplicationPreAuthorized#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#read ApplicationPreAuthorized#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/application_pre_authorized#update ApplicationPreAuthorized#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPreAuthorizedTimeoutsOutputReference <a name="ApplicationPreAuthorizedTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new ApplicationPreAuthorizedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.applicationPreAuthorized.ApplicationPreAuthorizedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



