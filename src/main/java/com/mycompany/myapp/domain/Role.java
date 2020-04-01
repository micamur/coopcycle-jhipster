package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.mycompany.myapp.domain.enumeration.RoleOption;

/**
 * A Role.
 */
@Entity
@Table(name = "role")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Role implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private RoleOption role;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "role_account_id",
               joinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "account_id_id", referencedColumnName = "id"))
    private Set<UserAccount> accountIds = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RoleOption getRole() {
        return role;
    }

    public Role role(RoleOption role) {
        this.role = role;
        return this;
    }

    public void setRole(RoleOption role) {
        this.role = role;
    }

    public Set<UserAccount> getAccountIds() {
        return accountIds;
    }

    public Role accountIds(Set<UserAccount> userAccounts) {
        this.accountIds = userAccounts;
        return this;
    }

    public Role addAccountId(UserAccount userAccount) {
        this.accountIds.add(userAccount);
        userAccount.getRoles().add(this);
        return this;
    }

    public Role removeAccountId(UserAccount userAccount) {
        this.accountIds.remove(userAccount);
        userAccount.getRoles().remove(this);
        return this;
    }

    public void setAccountIds(Set<UserAccount> userAccounts) {
        this.accountIds = userAccounts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Role)) {
            return false;
        }
        return id != null && id.equals(((Role) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Role{" +
            "id=" + getId() +
            ", role='" + getRole() + "'" +
            "}";
    }
}
