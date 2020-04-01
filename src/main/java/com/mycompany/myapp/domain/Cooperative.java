package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * The Cooperative entity.
 */
@ApiModel(description = "The Cooperative entity.")
@Entity
@Table(name = "cooperative")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Cooperative implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 1)
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Size(min = 1)
    @Column(name = "area", nullable = false)
    private String area;

    @ManyToOne
    @JsonIgnoreProperties("cooperatives")
    private UserAccount dg;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "cooperative_restaurant",
               joinColumns = @JoinColumn(name = "cooperative_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "restaurant_id", referencedColumnName = "id"))
    private Set<Restaurant> restaurants = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "cooperative_adminsys",
               joinColumns = @JoinColumn(name = "cooperative_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "adminsys_id", referencedColumnName = "id"))
    private Set<UserAccount> adminsys = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "cooperative_admincoop",
               joinColumns = @JoinColumn(name = "cooperative_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "admincoop_id", referencedColumnName = "id"))
    private Set<UserAccount> admincoops = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Cooperative name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea() {
        return area;
    }

    public Cooperative area(String area) {
        this.area = area;
        return this;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public UserAccount getDg() {
        return dg;
    }

    public Cooperative dg(UserAccount userAccount) {
        this.dg = userAccount;
        return this;
    }

    public void setDg(UserAccount userAccount) {
        this.dg = userAccount;
    }

    public Set<Restaurant> getRestaurants() {
        return restaurants;
    }

    public Cooperative restaurants(Set<Restaurant> restaurants) {
        this.restaurants = restaurants;
        return this;
    }

    public Cooperative addRestaurant(Restaurant restaurant) {
        this.restaurants.add(restaurant);
        restaurant.getCooperatives().add(this);
        return this;
    }

    public Cooperative removeRestaurant(Restaurant restaurant) {
        this.restaurants.remove(restaurant);
        restaurant.getCooperatives().remove(this);
        return this;
    }

    public void setRestaurants(Set<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }

    public Set<UserAccount> getAdminsys() {
        return adminsys;
    }

    public Cooperative adminsys(Set<UserAccount> userAccounts) {
        this.adminsys = userAccounts;
        return this;
    }

    public Cooperative addAdminsys(UserAccount userAccount) {
        this.adminsys.add(userAccount);
        userAccount.getAdminsys().add(this);
        return this;
    }

    public Cooperative removeAdminsys(UserAccount userAccount) {
        this.adminsys.remove(userAccount);
        userAccount.getAdminsys().remove(this);
        return this;
    }

    public void setAdminsys(Set<UserAccount> userAccounts) {
        this.adminsys = userAccounts;
    }

    public Set<UserAccount> getAdmincoops() {
        return admincoops;
    }

    public Cooperative admincoops(Set<UserAccount> userAccounts) {
        this.admincoops = userAccounts;
        return this;
    }

    public Cooperative addAdmincoop(UserAccount userAccount) {
        this.admincoops.add(userAccount);
        userAccount.getAdmincoops().add(this);
        return this;
    }

    public Cooperative removeAdmincoop(UserAccount userAccount) {
        this.admincoops.remove(userAccount);
        userAccount.getAdmincoops().remove(this);
        return this;
    }

    public void setAdmincoops(Set<UserAccount> userAccounts) {
        this.admincoops = userAccounts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cooperative)) {
            return false;
        }
        return id != null && id.equals(((Cooperative) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Cooperative{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", area='" + getArea() + "'" +
            "}";
    }
}
