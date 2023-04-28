# `azuread_directory_role_assignment`

Refer to the Terraform Registory for docs: [`azuread_directory_role_assignment`](https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment).

# `directoryRoleAssignment` Submodule <a name="`directoryRoleAssignment` Submodule" id="@cdktf/provider-azuread.directoryRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryRoleAssignment <a name="DirectoryRoleAssignment" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment azuread_directory_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignment;

DirectoryRoleAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .principalObjectId(java.lang.String)
    .roleId(java.lang.String)
//  .appScopeId(java.lang.String)
//  .appScopeObjectId(java.lang.String)
//  .directoryScopeId(java.lang.String)
//  .directoryScopeObjectId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DirectoryRoleAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | The object ID of the directory role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.appScopeId">appScopeId</a></code> | <code>java.lang.String</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.appScopeObjectId">appScopeObjectId</a></code> | <code>java.lang.String</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.directoryScopeObjectId">directoryScopeObjectId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.principalObjectId"></a>

- *Type:* java.lang.String

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#principal_object_id DirectoryRoleAssignment#principal_object_id}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

The object ID of the directory role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#role_id DirectoryRoleAssignment#role_id}

---

##### `appScopeId`<sup>Optional</sup> <a name="appScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.appScopeId"></a>

- *Type:* java.lang.String

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#app_scope_id DirectoryRoleAssignment#app_scope_id}

---

##### `appScopeObjectId`<sup>Optional</sup> <a name="appScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.appScopeObjectId"></a>

- *Type:* java.lang.String

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#app_scope_object_id DirectoryRoleAssignment#app_scope_object_id}

---

##### `directoryScopeId`<sup>Optional</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.directoryScopeId"></a>

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#directory_scope_id DirectoryRoleAssignment#directory_scope_id}

---

##### `directoryScopeObjectId`<sup>Optional</sup> <a name="directoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.directoryScopeObjectId"></a>

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#directory_scope_object_id DirectoryRoleAssignment#directory_scope_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#timeouts DirectoryRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId">resetAppScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeObjectId">resetAppScopeObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId">resetDirectoryScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeObjectId">resetDirectoryScopeObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts"></a>

```java
public void putTimeouts(DirectoryRoleAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

---

##### `resetAppScopeId` <a name="resetAppScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId"></a>

```java
public void resetAppScopeId()
```

##### `resetAppScopeObjectId` <a name="resetAppScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeObjectId"></a>

```java
public void resetAppScopeObjectId()
```

##### `resetDirectoryScopeId` <a name="resetDirectoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId"></a>

```java
public void resetDirectoryScopeId()
```

##### `resetDirectoryScopeObjectId` <a name="resetDirectoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeObjectId"></a>

```java
public void resetDirectoryScopeObjectId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignment;

DirectoryRoleAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignment;

DirectoryRoleAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignment;

DirectoryRoleAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput">appScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectIdInput">appScopeObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput">directoryScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectIdInput">directoryScopeObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput">principalObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId">appScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectId">appScopeObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectId">directoryScopeObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts"></a>

```java
public DirectoryRoleAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a>

---

##### `appScopeIdInput`<sup>Optional</sup> <a name="appScopeIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput"></a>

```java
public java.lang.String getAppScopeIdInput();
```

- *Type:* java.lang.String

---

##### `appScopeObjectIdInput`<sup>Optional</sup> <a name="appScopeObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectIdInput"></a>

```java
public java.lang.String getAppScopeObjectIdInput();
```

- *Type:* java.lang.String

---

##### `directoryScopeIdInput`<sup>Optional</sup> <a name="directoryScopeIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput"></a>

```java
public java.lang.String getDirectoryScopeIdInput();
```

- *Type:* java.lang.String

---

##### `directoryScopeObjectIdInput`<sup>Optional</sup> <a name="directoryScopeObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectIdInput"></a>

```java
public java.lang.String getDirectoryScopeObjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalObjectIdInput`<sup>Optional</sup> <a name="principalObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput"></a>

```java
public java.lang.String getPrincipalObjectIdInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `appScopeId`<sup>Required</sup> <a name="appScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId"></a>

```java
public java.lang.String getAppScopeId();
```

- *Type:* java.lang.String

---

##### `appScopeObjectId`<sup>Required</sup> <a name="appScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectId"></a>

```java
public java.lang.String getAppScopeObjectId();
```

- *Type:* java.lang.String

---

##### `directoryScopeId`<sup>Required</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId"></a>

```java
public java.lang.String getDirectoryScopeId();
```

- *Type:* java.lang.String

---

##### `directoryScopeObjectId`<sup>Required</sup> <a name="directoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectId"></a>

```java
public java.lang.String getDirectoryScopeObjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId"></a>

```java
public java.lang.String getPrincipalObjectId();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryRoleAssignmentConfig <a name="DirectoryRoleAssignmentConfig" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignmentConfig;

DirectoryRoleAssignmentConfig.builder()
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
    .principalObjectId(java.lang.String)
    .roleId(java.lang.String)
//  .appScopeId(java.lang.String)
//  .appScopeObjectId(java.lang.String)
//  .directoryScopeId(java.lang.String)
//  .directoryScopeObjectId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DirectoryRoleAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | The object ID of the directory role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId">appScopeId</a></code> | <code>java.lang.String</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeObjectId">appScopeObjectId</a></code> | <code>java.lang.String</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeObjectId">directoryScopeObjectId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId"></a>

```java
public java.lang.String getPrincipalObjectId();
```

- *Type:* java.lang.String

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#principal_object_id DirectoryRoleAssignment#principal_object_id}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

The object ID of the directory role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#role_id DirectoryRoleAssignment#role_id}

---

##### `appScopeId`<sup>Optional</sup> <a name="appScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId"></a>

```java
public java.lang.String getAppScopeId();
```

- *Type:* java.lang.String

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#app_scope_id DirectoryRoleAssignment#app_scope_id}

---

##### `appScopeObjectId`<sup>Optional</sup> <a name="appScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeObjectId"></a>

```java
public java.lang.String getAppScopeObjectId();
```

- *Type:* java.lang.String

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#app_scope_object_id DirectoryRoleAssignment#app_scope_object_id}

---

##### `directoryScopeId`<sup>Optional</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId"></a>

```java
public java.lang.String getDirectoryScopeId();
```

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#directory_scope_id DirectoryRoleAssignment#directory_scope_id}

---

##### `directoryScopeObjectId`<sup>Optional</sup> <a name="directoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeObjectId"></a>

```java
public java.lang.String getDirectoryScopeObjectId();
```

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#directory_scope_object_id DirectoryRoleAssignment#directory_scope_object_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts"></a>

```java
public DirectoryRoleAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#timeouts DirectoryRoleAssignment#timeouts}

---

### DirectoryRoleAssignmentTimeouts <a name="DirectoryRoleAssignmentTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignmentTimeouts;

DirectoryRoleAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#update DirectoryRoleAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/directory_role_assignment#update DirectoryRoleAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryRoleAssignmentTimeoutsOutputReference <a name="DirectoryRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_assignment.DirectoryRoleAssignmentTimeoutsOutputReference;

new DirectoryRoleAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



