package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * The UserAccount entity.
 */
@ApiModel(description = "The UserAccount entity.")
@Entity
@Table(name = "user_account")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 3, max = 40)
    @Column(name = "login", length = 40, nullable = false, unique = true)
    private String login;

    @NotNull
    @Pattern(regexp = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NotNull
    @Size(min = 8)
    @Column(name = "password", nullable = false)
    private String password;

    @ManyToMany(mappedBy = "adminsys")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Cooperative> adminsys = new HashSet<>();

    @ManyToMany(mappedBy = "admincoops")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Cooperative> admincoops = new HashSet<>();

    @ManyToMany(mappedBy = "accountIds")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Role> roles = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public UserAccount login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public UserAccount email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public UserAccount password(String password) {
        this.password = password;
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Cooperative> getAdminsys() {
        return adminsys;
    }

    public UserAccount adminsys(Set<Cooperative> cooperatives) {
        this.adminsys = cooperatives;
        return this;
    }

    public UserAccount addAdminsys(Cooperative cooperative) {
        this.adminsys.add(cooperative);
        cooperative.getAdminsys().add(this);
        return this;
    }

    public UserAccount removeAdminsys(Cooperative cooperative) {
        this.adminsys.remove(cooperative);
        cooperative.getAdminsys().remove(this);
        return this;
    }

    public void setAdminsys(Set<Cooperative> cooperatives) {
        this.adminsys = cooperatives;
    }

    public Set<Cooperative> getAdmincoops() {
        return admincoops;
    }

    public UserAccount admincoops(Set<Cooperative> cooperatives) {
        this.admincoops = cooperatives;
        return this;
    }

    public UserAccount addAdmincoop(Cooperative cooperative) {
        this.admincoops.add(cooperative);
        cooperative.getAdmincoops().add(this);
        return this;
    }

    public UserAccount removeAdmincoop(Cooperative cooperative) {
        this.admincoops.remove(cooperative);
        cooperative.getAdmincoops().remove(this);
        return this;
    }

    public void setAdmincoops(Set<Cooperative> cooperatives) {
        this.admincoops = cooperatives;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public UserAccount roles(Set<Role> roles) {
        this.roles = roles;
        return this;
    }

    public UserAccount addRole(Role role) {
        this.roles.add(role);
        role.getAccountIds().add(this);
        return this;
    }

    public UserAccount removeRole(Role role) {
        this.roles.remove(role);
        role.getAccountIds().remove(this);
        return this;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserAccount)) {
            return false;
        }
        return id != null && id.equals(((UserAccount) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "UserAccount{" +
            "id=" + getId() +
            ", login='" + getLogin() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            "}";
    }
}
