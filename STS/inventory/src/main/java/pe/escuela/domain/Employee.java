package pe.escuela.domain;

public class Employee {
	private int studentId;
	private String fecha; ;
	private String tipo;
	private String entidad;
	private String direc;
	private String ingresos;
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getEntidad() {
		return entidad;
	}
	public void setEntidad(String entidad) {
		this.entidad = entidad;
	}
	public String getDirec() {
		return direc;
		
	}
	public void setDirec(String direc) {
		this.direc = direc;
	}
	public String getIngresos() {
		return ingresos;
	}
	public void setIngresos(String ingresos) {
		this.ingresos = ingresos;
	}
	
	
}
