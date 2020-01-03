package pe.escuela.domain;

import java.util.List;

import lombok.Data;

@Data
public class Student {
	 private String studentId;
	 private String firstLastname;
	 private String secondLastname;
	 private String name;
	 private String alias;
	 private String stateCivil;
	 private String nationality;
	 private String deparment;
	 private String province;
	 private String distrity;
	 private String dateBirth;
	 private String correo;
	 private String paginaWeb;
	 private String facebook;
	 private String twiter;
	 private String celular;
	 private String telefono;
	 private String sexo;
	 private String talla;
	 private String peso;
	 private String colorTez;
	 private String tipoCara;
	 private String colorOjos;
	 private String tipoPelo;
	 private String tipoNariz;
	 private String grupoSanguineo;
	 private String posiUserBarba;
	 private String senalesParticualres;
	 private String inscripcion;
	 private String libretaMilitar;
	 private String dni;
	 private String cip;
	 private String brevete;
	 private String pasaporte;
	 private String pnp;
	 private String enjuiciado;
	 private String hospitalizado;
	 private String smv;
	 private String agrupacionPolitica;
	 private String comisaria;
	 private String juzgado;
	 private String hospital;
	 private String dependencia;
	 private List<Family> families;
	 private List<Travel> travels;
	 private List<Employee> employees;
	 private List<Education> educations;
}
